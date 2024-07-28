import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { Repository } from 'typeorm';
import { Booking } from 'src/booking/entities/booking.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment) private paymentRepository: Repository<Payment>,
    @InjectRepository(Booking) private bookingRepository: Repository<Booking>,
  ){}
  async create(createPaymentDto: CreatePaymentDto, bookingId: number) {
    const payment = new Payment();
    const booking = await this.bookingRepository.findOne({ where: { id: bookingId } });
    if (!booking) {
      throw new Error('Booking not found');
    }

    payment.price = createPaymentDto.price;
    payment.status = createPaymentDto.status;
    payment.booking = booking;
    return this.paymentRepository.save(payment);
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
