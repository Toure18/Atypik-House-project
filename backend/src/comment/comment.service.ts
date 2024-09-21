import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/user.entity/user.entity';
import { Repository } from 'typeorm';
import { Property } from '../properties/entities/property.entity';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment) private commentRepository: Repository<Comment>,
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Property) private propertyRepository: Repository<Property>,
  ){}
  async create(createCommentDto: Comment, userId: number, propertyId: number) {
    const comment = new Comment;
    const user = await this.usersRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found');
    }
    const property = await this.propertyRepository.findOne({ where: { id: propertyId } });
    if (!property) {
      throw new Error('Property not found');
    }
    comment.text = createCommentDto.text;
    comment.date = createCommentDto.date;
    comment.user = user;
    comment.property = property;
    return this.commentRepository.save(comment);
  }

  async findAllByProperty(propertyId): Promise<any> {
    const result = await this.commentRepository.find({
      relations: ['user', 'property'],
      where: [{property: {id: propertyId} }]
  });
    return result;
  }

  async findAllByUser(userId): Promise<any> {
    const result = await this.commentRepository.find({
      relations: ['user', 'property'],
      where: [{user: {id: userId} }]
  });
    return result;
  }

  async findOne(id: number): Promise<any> {
    const result = await this.commentRepository.find({
      relations: ['user', 'property'],
      select: ['text', 'date', 'user', 'property'],
      where: [{ id: id }],
    });
    return result;
    
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    const comment = await this.commentRepository.findOne({ where: { id } });
    if (!comment) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }

    Object.assign(comment, updateCommentDto);
    return this.commentRepository.save(comment);
  }

  remove(id: number) {
    return this.commentRepository.delete(id);
  }
}