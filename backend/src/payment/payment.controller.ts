import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Payment } from './entities/payment.entity';
import Stripe from 'stripe';
import { Booking } from 'src/booking/entities/booking.entity';

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
  async create(@Body() createPaymentDto: CreatePaymentDto, @Query('bookingId') bookingId: number) {
    const { payment, sessionUrl } = await this.paymentService.create(createPaymentDto, bookingId);
    return { payment, sessionUrl };
    
  }
  
  @Post('webhook')
  async handleStripeWebhook(@Req() req: Request, @Res() res: Response) {
    const sig = req.headers['stripe-signature'] as string;
    const stripe = new Stripe(process.env.STRIPE_API_KEY, {
      apiVersion: '2024-06-20',
    });

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Gérer l'événement `checkout.session.completed`
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;

      await this.paymentService.updatePaymentStatus(session.id, 'success');
    }

    res.json({ received: true });
  }

  @Get()
  @ApiOperation({ summary: 'Get all payments' })
  @ApiResponse({ status: 200, description: 'Return all payments.', type: [Payment] })
  findAll() {
    return this.paymentService.findAll();
  }

  @Get('/booking')
  @ApiOperation({ summary: 'Get all payments by booking' })
  @ApiResponse({ status: 200, description: 'Return all payments by booking.', type: [Payment] })
  findByBookingId(@Query('bookingId') bookingId: number) {
    return this.paymentService.findByBookingId(bookingId);
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
     return this.paymentService.update(+id, updatePaymentDto);
  }

  @Delete('/delete')
  async remove(@Query('paymentId') paymentId: number) {
    return await this.paymentService.remove(paymentId);

  }
}