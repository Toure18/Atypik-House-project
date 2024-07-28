import { PartialType } from '@nestjs/mapped-types';
import { CreateCommentDto } from './create-comment.dto';
import { IsDate, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateCommentDto extends PartialType(CreateCommentDto) {

  @IsNotEmpty()
  text: string;

  @IsDate()
  @Transform(({ value }) => new Date(value)) 
  date: Date;
  
}
