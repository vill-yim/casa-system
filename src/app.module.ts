import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config'
import { CasaModule } from './casa/casa.module';
import { ConfigDatabase } from './configDatabase';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:".env",
      isGlobal:true}), ConfigDatabase, CasaModule ],  
})
export class AppModule {}
