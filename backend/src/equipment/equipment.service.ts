import { Injectable } from '@nestjs/common';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdateEquipmentDto } from './dto/update-equipment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from '../properties/entities/property.entity';
import { Repository } from 'typeorm';
import { Equipment } from './entities/equipment.entity';

@Injectable()
export class EquipmentService {
  @InjectRepository(Equipment) private equipementRepository: Repository<Equipment>
  @InjectRepository(Property) private propertyRepository: Repository<Property>

  create(createEquipmentDto: CreateEquipmentDto) {
    return 'This action adds a new equipment';
  }

  async findAll() : Promise <any> {
    const result = await this.equipementRepository.find({
      relations: ['property']
  });
    return result;
  }

  async findOne(id: number): Promise <any> {
    const result = await this.equipementRepository.find({
      relations: ['property'],
      select: ['listEquipment', 'property'],
      where: [{ id: id }],
    });
    return result;
  }

  update(id: number, updateEquipmentDto: UpdateEquipmentDto) {
    return `This action updates a #${id} equipment`;
  }

  remove(id: number) {
    return `This action removes a #${id} equipment`;
  }
}