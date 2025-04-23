// src/medico/medico.controller.ts
import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    ParseIntPipe,
  } from '@nestjs/common';
  import { MedicoService } from './medico.service';
  import { Medico } from '../../generated/prisma';
  
  @Controller('medico')
  export class MedicoController {
    constructor(private readonly medicoService: MedicoService) {}
  
    @Post()
    create(@Body() data: Omit<Medico, 'id'>) {
      return this.medicoService.create(data);
    }
  
    @Get()
    findAll() {
      return this.medicoService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.medicoService.findOne(id);
    }
  
    @Put(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() data: Partial<Omit<Medico, 'id'>>,
    ) {
      return this.medicoService.update(id, data);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.medicoService.remove(id);
    }
  }
  