//src/auth/auth.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/users/user.entity/user.entity';
import { Public } from './decorators/public.decorator';
@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() user: User): Promise<any> {
    return this.authService.login(user);
  }


  @Public()
  @Post('register')
  async register(@Body() user: User): Promise<any> {
    return this.authService.register(user);
  }
}