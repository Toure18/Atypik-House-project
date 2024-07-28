import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Query } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { Booking } from './entities/booking.entity';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('booking')
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new booking' })
  @ApiResponse({ status: 201, description: 'The booking has been successfully created.', type: Booking })
  @ApiResponse({ status: 400, description: 'Invalid input, object invalid.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() booking: Booking, @Request() req, @Query('id_property') id_property: number) {
    const userId = req.user;
    const propertyId = id_property;
    return this.bookingService.create(booking, userId, propertyId);
  }

  @Get()
  @ApiOperation({ summary: 'Get all bookings' })
  @ApiResponse({ status: 200, description: 'Return all bookings.', type: [Booking] })
  findAll() {
    return this.bookingService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get booking by id' })
  @ApiResponse({ status: 200, description: 'Return the booking by id.', type: Booking })
  @ApiResponse({ status: 404, description: 'Booking not found.' })
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update booking by id' })
  @ApiResponse({ status: 200, description: 'The booking has been successfully updated.', type: Booking })
  @ApiResponse({ status: 400, description: 'Invalid input, object invalid.' })
  @ApiResponse({ status: 404, description: 'Booking not found.' })
  update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(+id, updateBookingDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete booking by id' })
  @ApiResponse({ status: 200, description: 'The booking has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Booking not found.' })
  remove(@Param('id') id: string) {
    return this.bookingService.remove(+id);
  }
}
