import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CasaService } from './casa.service';
import { CreateCasaDto } from './dto/create-casa.dto';
import { UpdateCasaDto } from './dto/update-casa.dto';
import { get } from 'http';

@Controller('casa')
export class CasaController {
  constructor(private readonly casaService: CasaService) {}

  @Post()
  create(@Body() createCasaDto: CreateCasaDto) {
    return this.casaService.create(createCasaDto);
  }

@Get('casas')
async getCasas(){
const casas = await  this.casaService.getCasa()
return String(casas)
}

}
