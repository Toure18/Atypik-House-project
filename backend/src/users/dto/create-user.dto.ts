// src/users/dto/create-user.dto.ts
import { IsNotEmpty, IsEmail, MinLength, IsOptional, IsInt } from 'class-validator';

export class CreateUserDto {
  @IsOptional()
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsNotEmpty()
  firstname: string;

  @IsNotEmpty()
  lastname: string;

  @IsNotEmpty()
  accountType: string;
}
