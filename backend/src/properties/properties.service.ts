import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './entities/property.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/user.entity/user.entity';

@Injectable()
export class PropertiesService {
  constructor(
    @InjectRepository(Property) private propertyRepository: Repository<Property>,
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

 async create(createPropertyDto: Property, userId: number) {
    const property = new Property();
    const user = await this.usersRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found');
    }

    property.name = createPropertyDto.name;
    property.type = createPropertyDto.type;
    property.piecesNb = createPropertyDto.piecesNb;
    property.capacity = createPropertyDto.capacity;
    property.price = createPropertyDto.price;
    property.pictures = createPropertyDto.pictures;
    property.availability_begin = createPropertyDto.availability_begin;
    property.availability_end = createPropertyDto.availability_end;
    property.description = createPropertyDto.description;
    property.user = user;
    
    return this.propertyRepository.save(property);
  }

  async findAll(page: number = 1, limit: number = 10): Promise<any> {
    const [result, total] = await this.propertyRepository.findAndCount({
      relations: ['user'],
      skip: (page - 1) * limit,  
      take: limit,               
    });

    return {
      data: result,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
    };
  }

 
  async findAllByUser(userId: number, page: number = 1, limit: number = 10): Promise<any> {
    const [result, total] = await this.propertyRepository.findAndCount({
      relations: ['user'],
      where: { user: { id: userId } },
      skip: (page - 1) * limit,  
      take: limit,               
    });

    return {
      data: result,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalItems: total,
    };
  }
  async findOne(id: number) : Promise<any>  {
    const result = await this.propertyRepository.find({
      relations: ['user'],
      select: ['name', 'availability_begin', 'availability_end', 'capacity', 'pictures', 'piecesNb', 'price', 'type', 'user', 'description'],
      where: [{ id: id }],
    });
    return result;
  }

  async update(id: number, updatePropertyDto: UpdatePropertyDto) {

    const property = await this.propertyRepository.findOne({ where: { id } });
    if (!property) {
      throw new NotFoundException(`Property with ID ${id} not found`);
    }

    Object.assign(property, updatePropertyDto);
    return this.propertyRepository.save(property);
  }

  remove(id: number) {
    return this.propertyRepository.delete(id);
  }
}