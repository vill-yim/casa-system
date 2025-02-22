import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmService } from "./typeOrmService";

@Module({
    imports:[
        TypeOrmModule.forRootAsync({
            name:"casa",
            useClass: TypeOrmService
        }),
    ],
})

export class ConfigDatabase{}
