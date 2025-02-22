import { CasaRepository } from './casa.repository';

import { Injectable } from '@nestjs/common';
import { CreateCasaDto } from './dto/create-casa.dto';
import { UpdateCasaDto } from './dto/update-casa.dto';
import { Casa } from './entities/casa.entity';

@Injectable()
export class CasaService {
  constructor(
    private readonly casaRepository:CasaRepository
  ){}
  create(createCasaDto: CreateCasaDto) {
    return  'crear'
  }

  async getCasa() {
    const casas = await this.casaRepository.getCasa();
    return casas
  }

}
