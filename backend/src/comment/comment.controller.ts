import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Query } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('comment')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new comment' })
  @ApiResponse({ status: 201, description: 'The comment has been successfully created.', type: Comment })
  @ApiResponse({ status: 400, description: 'Invalid input, object invalid.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() comment: Comment, @Request() req, @Query('property_id') property_id) {
    const user_id = req.user;
    const propertyId = property_id;
    return this.commentService.create(comment, user_id, propertyId);
  }

  @Get()
  @ApiOperation({ summary: 'Get all comments' })
  @ApiResponse({ status: 200, description: 'Return all comments.', type: [Comment] })
  findAll() {
    return this.commentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get comment by id' })
  @ApiResponse({ status: 200, description: 'Return the comment by id.', type: Comment })
  @ApiResponse({ status: 404, description: 'Comment not found.' })
  findOne(@Param('id') id: string) {
    return this.commentService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update comment by id' })
  @ApiResponse({ status: 200, description: 'The comment has been successfully updated.', type: Comment })
  @ApiResponse({ status: 400, description: 'Invalid input, object invalid.' })
  @ApiResponse({ status: 404, description: 'Comment not found.' })
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete comment by id' })
  @ApiResponse({ status: 200, description: 'The comment has been successfully deleted.' })
  @ApiResponse({ status: 404, description: 'Comment not found.' })
  remove(@Param('id') id: string) {
    return this.commentService.remove(+id);
  }
}
