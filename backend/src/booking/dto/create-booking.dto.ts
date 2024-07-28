import { Transform, Type } from "class-transformer";
import { IsDate, IsInt, IsNotEmpty, IsNumber, IsOptional} from "class-validator";

export class CreateBookingDto {
  @IsOptional()
  @IsInt()
  id: number;

  @IsDate()
  @Transform(({ value }) => new Date(value)) 
  beginDate: Date;

  @IsDate()
  @Transform(({ value }) => new Date(value)) 
  endDate: Date;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  user: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  property: number;

  
}

