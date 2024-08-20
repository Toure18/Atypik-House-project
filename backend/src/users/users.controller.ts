// src/app/users/users.controller.ts

import {Controller, Post, Body, Get, Put, Delete, Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity/user.entity';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get user by id' })
  @ApiResponse({ status: 200, description: 'Return the user by id.', type: User })
  @ApiResponse({ status: 404, description: 'User not found.' })
  get(@Param() params) {
    return this.service.getUser(params.id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'The user has been successfully created.', type: User })
  @ApiResponse({ status: 400, description: 'Invalid input, object invalid.' })
  create(@Body() user: User) {
    return this.service.saveUser(user);
  }

  @Put()
  @ApiOperation({ summary: 'Update an existing user' })
  @ApiResponse({ status: 200, description: 'The user has been successfully updated.', type: User })
  @ApiResponse({ status: 400, description: 'Invalid input, object invalid.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  update(@Body() user: User) {
    return this.service.saveUser(user);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by id' })
  @ApiResponse({ status: 200, description: 'The user has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  deleteUser(@Param() params) {
    this.service.deleteUser(params.id);
    return;
  }
}
