import { Transform, Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class CreateCommentDto {

  @IsNotEmpty()
  text: string;

  @IsDate()
  @Transform(({ value }) => new Date(value)) 
  date: Date;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  user: number;

  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  property: number;
  
}
