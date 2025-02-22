import { Module } from '@nestjs/common';
import { CasaService } from './casa.service';
import { CasaController } from './casa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Casa } from './entities/casa.entity';
import { CasaRepository } from './casa.repository';

@Module({
  imports:[TypeOrmModule.forFeature([Casa],'casa')],
  controllers: [CasaController],
  providers: [CasaService,CasaRepository],
  exports: [CasaService,CasaRepository],
})
export class CasaModule {}
