import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Paciente } from '../../generated/prisma';

@Injectable()
export class PacienteService {
  constructor(private prisma: PrismaService) {}

  async create(data: Omit<Paciente, 'id'>) {
    return this.prisma.paciente.create({ data });
  }

  async findAll() {
    return this.prisma.paciente.findMany();
  }

  async findOne(id: number) {
    return this.prisma.paciente.findUnique({ where: { id } });
  }

  async update(id: number, data: Partial<Omit<Paciente, 'id'>>) {
    return this.prisma.paciente.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.paciente.delete({ where: { id } });
  }
}
