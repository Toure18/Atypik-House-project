import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Query, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { Property } from './entities/property.entity';
import { ApiConsumes, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Public } from '../auth/decorators/public.decorator';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Post('/upload')
  @ApiOperation({ summary: 'Upload property images' })
  @ApiResponse({ status: 201, description: 'Images uploaded successfully.' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FilesInterceptor('images', 10, {
      storage: diskStorage({
        destination: './uploads/images',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async uploadFiles(@UploadedFiles() files: Express.Multer.File[], @Request() req) {
    const imagePaths = files.map(file => file.filename);
    return {
      message: 'Images uploaded successfully.',
      imagePaths,
    };
  }

  
  @Post('/new')
  @ApiOperation({ summary: 'Create a new property' })
  @ApiResponse({ status: 201, description: 'The property has been successfully created.', type: Property })
  @ApiResponse({ status: 400, description: 'Invalid input, object invalid.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() property: Property, @Body('imagePaths') imagePaths: string[], @Request() req) {
    const userId = req.user;
    property.pictures = imagePaths;
    return this.propertiesService.create(property, userId);
  }

  
  @Get('/all')
  @ApiOperation({ summary: 'Get all properties with pagination' })
  @ApiResponse({ status: 200, description: 'Return paginated list of properties.', type: [Property] })
  @Public()
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10   
  ) {
    return this.propertiesService.findAll(page, limit);
  }

  @Get('/my-properties')
  @ApiOperation({ summary: 'Get all properties of the user with pagination' })
  @ApiResponse({ status: 200, description: 'Return paginated list of properties for the user.', type: [Property] })
  findAllByUser(
    @Request() req,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10
  ) {
    const userId = req.user;
    return this.propertiesService.findAllByUser(userId, page, limit);
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