// src/auth/auth.service.ts

import { User } from './../users/user.entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './../users/users.service';
import { ConflictException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
    ) {}

  /**
   * Validate the user in parameter
   */
  async validate(email: string): Promise<any> {
    return this.usersService.getUserByEmail(email);
  }

  /**
   * Try to login the user in parameter.
   * Return an access token if login is successfull otherwise return
   * a 404 status
   * @param user 
   */
  public async login(user: User): Promise<any | { status: number}> {
    return this.validate(user.email).then(userData => {
      // user not found
      if (!userData || userData.password != this.hash(user.password)) {
        throw new HttpException("L'e-mail ou le mot de passe fourni est incorrect", 404);
      }

      // user found
      // The access token will be composed by the email
      const payload = `${userData.email}`;
      const accessToken = this.jwtService.sign(payload);

      return {
        expires_in: 3600, // 1hour
        access_token: accessToken,
      }
    });
  }

  public async register(createUserDto: CreateUserDto): Promise<any> {
    const existingUser = await this.usersService.getUserByEmail(createUserDto.email);
    if (existingUser) {
      throw new ConflictException('Email address already taken');
    }

    const user = new User();
    user.email = createUserDto.email;
    user.password = this.hash(createUserDto.password);
    user.firstname = createUserDto.firstname;
    user.lastname = createUserDto.lastname;
    user.accountType = createUserDto.accountType;

    return this.usersService.saveUser(user);
  }

  /**
   * Hash the password in parameter.
   */
  private hash(password): string{
   return crypto.createHmac('sha256', password).digest('hex');
  }

  
}