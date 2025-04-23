import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ConsultaService {
  constructor(private prisma: PrismaService) {}

  async create(data: { dataHora: Date; pacienteId: number; medicoId: number }) {
    return this.prisma.consulta.create({ data });
  }

  async findAll() {
    return this.prisma.consulta.findMany({
      include: {
        paciente: true,
        medico: true,
      },
    });
  }
}
