// src/paciente/paciente.controller.ts
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
  import { PacienteService } from './paciente.service';
  import { Paciente } from '../../generated/prisma';
  
  @Controller('paciente')
  export class PacienteController {
    constructor(private readonly pacienteService: PacienteService) {}
  
    @Post()
    create(@Body() data: Omit<Paciente, 'id'>) {
      return this.pacienteService.create(data);
    }
  
    @Get()
    findAll() {
      return this.pacienteService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
      return this.pacienteService.findOne(id);
    }
  
    @Put(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() data: Partial<Omit<Paciente, 'id'>>,
    ) {
      return this.pacienteService.update(id, data);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
      return this.pacienteService.remove(id);
    }
  }
  