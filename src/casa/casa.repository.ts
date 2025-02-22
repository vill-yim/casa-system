import { Injectable } from '@nestjs/common';
import { Casa } from './entities/casa.entity';
import { Repository } from 'typeorm';
import {  InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CasaRepository {
  constructor(
    @InjectRepository(Casa,'casa')
    private readonly casaRepository: Repository<Casa>,
  ) {}

  async getCasa(): Promise<Casa[]> {
    const casas = await this.casaRepository.find();
    return casas;
  }
}
