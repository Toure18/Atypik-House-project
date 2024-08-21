import { Controller, Get, Post, Body, Patch, Param, Delete, Request } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './entities/property.entity';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Public } from '../auth/decorators/public.decorator';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  
  @Post('/new')
  @ApiOperation({ summary: 'Create a new property' })
  @ApiResponse({ status: 201, description: 'The property has been successfully created.', type: Property })
  @ApiResponse({ status: 400, description: 'Invalid input, object invalid.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() property: Property, @Request() req) {
    const userId = req.user;
    return this.propertiesService.create(property, userId);
  }

  
  @Get('/all')
  @ApiOperation({ summary: 'Get all properties' })
  @ApiResponse({ status: 200, description: 'Return all properties.', type: [Property] })
  @Public() 
  findAll() {
    return this.propertiesService.findAll();
  }

  @Get('/my-properties')
  @ApiOperation({ summary: 'Get all properties of the user' })
  @ApiResponse({ status: 200, description: 'Return all properties of the user.', type: [Property] })
  findAllByUser(@Request() req) {
    const userId = req.user;
    return this.propertiesService.findAllByUser(userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get property by id' })
  @ApiResponse({ status: 200, description: 'Return the property by id.', type: Property })
  @ApiResponse({ status: 404, description: 'Property not found.' })
  @Public() 
  findOne(@Param('id') id: string) {
    return this.propertiesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update property by id' })
  @ApiResponse({ status: 200, description: 'The property has been successfully updated.', type: Property })
  @ApiResponse({ status: 400, description: 'Invalid input, object invalid.' })
  @ApiResponse({ status: 404, description: 'Property not found.' })
  update(@Param('id') id: string, @Body() updatePropertyDto: UpdatePropertyDto) {
    return this.propertiesService.update(+id, updatePropertyDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete property by id' })
  @ApiResponse({ status: 200, description: 'The property has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Property not found.' })
  remove(@Param('id') id: string) {
    return this.propertiesService.remove(+id);
  }
}