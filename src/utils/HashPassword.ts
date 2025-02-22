import {genSalt, hash} from 'bcrypt'


export const  hashPasssword= async (psw: string)=>{
    const salt = await genSalt()
    const hashedPassword= await hash(psw, salt)
    return hashedPassword 
}