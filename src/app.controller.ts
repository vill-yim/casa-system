import { Controller, Get } from "@nestjs/common";


@Controller()
export class TestController{

    @Get()
    test(){
        return 'prueba para test'
    }
}