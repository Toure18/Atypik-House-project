import { PartialType } from '@nestjs/mapped-types';
import { CreateBookingDto } from './create-booking.dto';
import { IsDate } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateBookingDto extends PartialType(CreateBookingDto) {

  @IsDate()
  @Transform(({ value }) => new Date(value)) 
  beginDate: Date;

  @IsDate()
  @Transform(({ value }) => new Date(value)) 
  endDate: Date;
}