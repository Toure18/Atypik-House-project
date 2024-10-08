import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { Repository } from 'typeorm';
import { Booking } from '../booking/entities/booking.entity';
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
  private stripe: Stripe;
  constructor(
    @InjectRepository(Payment) private paymentRepository: Repository<Payment>,
    @InjectRepository(Booking) private bookingRepository: Repository<Booking>,
  ){
    this.stripe = new Stripe(process.env.STRIPE_API_KEY, {
      apiVersion: '2024-06-20',
    });
  }
  async create(createPaymentDto: CreatePaymentDto, bookingId: number) {
    const booking = await this.bookingRepository.findOne({ where: { id: bookingId } });
    if (!booking) {
        throw new Error('Booking not found');
    }

    const payment = new Payment();
    payment.price = createPaymentDto.price;
    payment.status = 'pending';
    payment.booking = booking;

    // Sauvegardez le paiement d'abord pour obtenir l'ID
    const savedPayment = await this.paymentRepository.save(payment);

    const session = await this.stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: 'Booking Payment',
                    },
                    unit_amount: createPaymentDto.price * 100,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `https://f2i-dsp4-g3-mt-mz-ai-f42d7.web.app/PaymentSuccess?paymentId=${savedPayment.id}`,
        cancel_url: 'https://f2i-dsp4-g3-mt-mz-ai-f42d7.web.app/PaymentError',
    });

    savedPayment.stripeSessionId = session.id;
    await this.paymentRepository.save(savedPayment); // Mettez à jour l'objet avec le session ID

    return { payment: savedPayment, sessionUrl: session.url };
}


  async updatePaymentStatus(stripeSessionId: string, status: string) {
    const payment = await this.paymentRepository.findOne({ where: { stripeSessionId } });
    if (!payment) {
      throw new Error('Payment not found');
    }

    payment.status = status;
    await this.paymentRepository.save(payment);
  }

  async findAll(): Promise<any> {
    const result = await this.paymentRepository.find({
      relations: ['booking']
  });
    return result;
  }

  async findOne(id: number) : Promise<any>  {
    const result = await this.paymentRepository.find({
      relations: ['booking'],
      select: ['price', 'status', 'booking'],
      where: [{ id: id }],
    });
    return result;
  }

  async findByBookingId(bookingId: number): Promise<Payment[]> {
    const booking = await this.bookingRepository.findOne({ where: { id: bookingId } });
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${bookingId} not found`);
    }

    const payments = await this.paymentRepository.find({
      where: { booking: { id: bookingId } },
      relations: ['booking'],
    });

    return payments;
  }

  async remove(paymentId: number) {
    const payment = await this.paymentRepository.findOne({ where: { id: paymentId }, relations: ['booking'] });
  
    if (!payment) {
      throw new NotFoundException(`Payment with ID ${paymentId} not found`);
    }
  
    const booking = payment.booking;
  
    const session = await this.stripe.checkout.sessions.retrieve(payment.stripeSessionId);
    const paymentIntentId = session.payment_intent;
  
    if (payment.status === 'completed' && paymentIntentId) {
      await this.stripe.refunds.create({
        payment_intent: paymentIntentId as string,
      });
      payment.status = 'refunded';
    } else {
      await this.stripe.checkout.sessions.expire(payment.stripeSessionId);
      payment.status = 'canceled';
    }
  
    await this.paymentRepository.save(payment);
  
    if (booking) {
      await this.bookingRepository.remove(booking);
    }
  
    return { message: 'Payment canceled and booking deleted successfully' };
  }

  async update(id: number, updatePaymentDto: UpdatePaymentDto) {
    const payment = await this.paymentRepository.findOne({ where: { id } });
    if (!payment) {
        throw new NotFoundException(`Payment with ID ${id} not found`);
    }
    
    payment.status = updatePaymentDto.status;
  
    await this.paymentRepository.save(payment);

    return payment;
}

  
}
