import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Casa } from "./casa/entities/casa.entity";
import { TypeOrmOptionsFactory,TypeOrmModuleOptions } from "@nestjs/typeorm";


@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory{
constructor(private readonly configService:ConfigService){}

createTypeOrmOptions(connectionName?: string): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
    return {
        type: 'postgres',
        url:this.configService.get<string>('URL_DATABASE'),
        entities: [Casa],
        synchronize: true,
    }
}


}
