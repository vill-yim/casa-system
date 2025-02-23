import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CasaService } from './casa.service';
import { CreateCasaDto } from './dto/create-casa.dto';
import { UpdateCasaDto } from './dto/update-casa.dto';
import { get } from 'http';

@Controller('casas')
export class CasaController {
  constructor(private readonly casaService: CasaService) {}

  @Post()
  create(@Body() createCasaDto: CreateCasaDto) {
    return this.casaService.create(createCasaDto);
  }

@Get()
async getCasas(){
const casas = await  this.casaService.getCasa()
return String(casas)
}

}
