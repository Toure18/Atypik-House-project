import { PartialType } from '@nestjs/mapped-types';
import { CreatePropertyDto } from './create-property.dto';
import { IsArray, IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdatePropertyDto extends PartialType(CreatePropertyDto) {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  piecesNb: number;

  @IsNotEmpty()
  @IsNumber()
  capacity: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsArray()
  pictures: string[];

  @IsDate()
  @Transform(({ value }) => new Date(value)) 
  availability_begin: Date;

  @IsDate()
  @Transform(({ value }) => new Date(value)) 
  availability_end: Date;

  @IsNotEmpty()
  @IsString()
  description: string;
}

