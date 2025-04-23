// src/medico/medico.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Medico } from '../../generated/prisma';

@Injectable()
export class MedicoService {
  constructor(private prisma: PrismaService) {}

  async create(data: Omit<Medico, 'id'>) {
    return this.prisma.medico.create({
      data,
    });
  }

  async findAll() {
    return this.prisma.medico.findMany();
  }

  async findOne(id: number) {
    return this.prisma.medico.findUnique({
      where: { id },
    });
  }

  async update(id: number, data: Partial<Omit<Medico, 'id'>>) {
    return this.prisma.medico.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return this.prisma.medico.delete({
      where: { id },
    });
  }
}
