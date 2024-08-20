import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { User } from '../users/user.entity/user.entity';
import { Property } from '../properties/entities/property.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, User, Property])],
  controllers: [CommentController],
  providers: [CommentService],
  exports: [CommentService, TypeOrmModule.forFeature([Comment]) ]
})
export class CommentModule {}




 