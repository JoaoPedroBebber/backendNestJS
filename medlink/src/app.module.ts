import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PacienteModule } from './paciente/paciente.module';
import { MedicoModule } from './medico/medico.module';
import { ConsultaModule } from './consulta/consulta.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PacienteModule, MedicoModule, ConsultaModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
