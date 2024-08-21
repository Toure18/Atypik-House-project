import { Module } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { PropertiesModule } from '../properties/properties.module';
import { UsersModule } from '../users/users.module';
import { Property } from '../properties/entities/property.entity';
import { User } from '../users/user.entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Booking, Property, User]),
    UsersModule,
    PropertiesModule,
  ],
  controllers: [BookingController],
  providers: [BookingService],
  exports: [BookingService, TypeOrmModule.forFeature([Booking]) ]
})
export class BookingModule {}


