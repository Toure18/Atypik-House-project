import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './entities/booking.entity';
import { User } from '../users/user.entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Property } from '../properties/entities/property.entity';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking) private bookingRepository: Repository<Booking>,
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Property) private propertyRepository: Repository<Property>,
  ){}
  async create(createBookingDto: Booking,  userId: number, propertyId: number) {
    const booking = new Booking();
    const user = await this.usersRepository.findOne({  where: { id: userId }});
    if (!user) {
      throw new Error('User not found');
    }

    const property = await this.propertyRepository.findOne({ where: { id: propertyId } });
    if (!property) {
      throw new Error('Property not found');
    }

    booking.beginDate = createBookingDto.beginDate;
    booking.endDate = createBookingDto.endDate;
    booking.user = user;
    booking.property = property;

    
    const savedBooking =  await this.bookingRepository.save(booking);

    return { bookingSave: savedBooking, bookingId: booking.id };
  }

  async findAll(): Promise<any> {

    const result = await this.bookingRepository.find({
      relations: ['user', 'property'],
      
  });
    return result;
  }

  async findOne(id: number): Promise<any> {
    const result = await this.bookingRepository.find({
      relations: ['user', 'property'],
      select: ['beginDate', 'endDate', 'user', 'property'],
      where: [{ id: id }],
    });
    return result;
    
  }

  async update(id: number, updateBookingDto: UpdateBookingDto) {
    const booking = await this.bookingRepository.findOne({ where: { id } });
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }

    Object.assign(booking, updateBookingDto);
    return this.bookingRepository.save(booking);
  }

  remove(id: number) {
    return this.bookingRepository.delete(id);
  }

}
