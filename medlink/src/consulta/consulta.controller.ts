import { Controller, Get, Post, Body } from '@nestjs/common';
import { ConsultaService } from './consulta.service';

@Controller('consulta')
export class ConsultaController {
  constructor(private readonly consultaService: ConsultaService) {}

  @Post()
  create(
    @Body()
    body: {
      dataHora: string;
      pacienteId: number;
      medicoId: number;
    },
  ) {
    const data = {
      ...body,
      dataHora: new Date(body.dataHora),
    };
    return this.consultaService.create(data);
  }

  @Get()
  findAll() {
    return this.consultaService.findAll();
  }
}