import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Equipment } from './entities/equipment.entity';

@ApiBearerAuth()
@ApiTags('equipment')
@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new equipment' })
  @ApiResponse({ status: 201, description: 'The equipment has been successfully created.', type: Equipment })
  @ApiResponse({ status: 400, description: 'Invalid input, object invalid.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentService.create(createEquipmentDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all equipment' })
  @ApiResponse({ status: 200, description: 'Return all equipment.', type: [Equipment] })
  findAll() {
    return this.equipmentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get equipment by id' })
  @ApiResponse({ status: 200, description: 'Return the equipment by id.', type: Equipment })
  @ApiResponse({ status: 404, description: 'Equipment not found.' })
  findOne(@Param('id') id: string) {
    return this.equipmentService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update equipment by id' })
  @ApiResponse({ status: 200, description: 'The equipment has been successfully updated.', type: Equipment })
  @ApiResponse({ status: 400, description: 'Invalid input, object invalid.' })
  @ApiResponse({ status: 404, description: 'Equipment not found.' })
  update(@Param('id') id: string, @Body() updateEquipmentDto: UpdateEquipmentDto) {
    return this.equipmentService.update(+id, updateEquipmentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete equipment by id' })
  @ApiResponse({ status: 200, description: 'The equipment has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Equipment not found.' })
  remove(@Param('id') id: string) {
    return this.equipmentService.remove(+id);
  }
}
