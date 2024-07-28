import { Transform, Type } from "class-transformer";
import { IsArray, IsDate, IsInt, IsNotEmpty, IsNumber, IsOptional} from "class-validator";

export class CreatePropertyDto {
  @IsOptional()
  @IsInt()
  id: number;

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
  @IsNumber()
  @Type(() => Number)
  user: number;

  
}


