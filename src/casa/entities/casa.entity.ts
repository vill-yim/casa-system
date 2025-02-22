import { Column,Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'casa1'})
export class Casa {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    nombre:string


    @Column()
    administradorId:string

    @Column()
    direccion:string


    @Column()
    habitsciones:number

    @Column('jsonb',{nullable:true})
    pendientes:any
    
}
