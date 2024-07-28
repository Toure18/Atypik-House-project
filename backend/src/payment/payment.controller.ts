import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { Booking } from 'src/booking/entities/booking.entity';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Payment } from './entities/payment.entity';

@ApiBearerAuth()
@ApiTags('payment')
@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new payment' })
  @ApiResponse({ status: 201, description: 'The payment has been successfully created.', type: Payment })
  @ApiResponse({ status: 400, description: 'Invalid input, object invalid.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createPaymentDto: CreatePaymentDto, @Query('booking_id') bookingId) {
    return this.paymentService.create(createPaymentDto, bookingId);
  }

  @Get()
  @ApiOperation({ summary: 'Get all payments' })
  @ApiResponse({ status: 200, description: 'Return all payments.', type: [Payment] })
  findAll() {
    return this.paymentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get payment by id' })
  @ApiResponse({ status: 200, description: 'Return the payment by id.', type: Payment })
  @ApiResponse({ status: 404, description: 'Payment not found.' })
  findOne(@Param('id') id: string) {
    return this.paymentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentDto: UpdatePaymentDto) {
    // return this.paymentService.update(+id, updatePaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return this.paymentService.remove(+id);
  }
}
