import { Inject, Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { Repository } from 'typeorm';
import { Booking } from 'src/booking/entities/booking.entity';
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
    const payment = new Payment();
    const booking = await this.bookingRepository.findOne({ where: { id: bookingId } });
    if (!booking) {
      throw new Error('Booking not found');
    }

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
      success_url: 'http://localhost:5000/booking',
      cancel_url: 'https://localhost:5000/cancel',
    });
    
    payment.price = createPaymentDto.price;
    payment.status = 'pending';
    payment.booking = booking;
    payment.stripeSessionId = session.id;
    
    const savedPayment = await this.paymentRepository.save(payment);

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

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}