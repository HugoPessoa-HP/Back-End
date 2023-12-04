import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"

interface AutenticacaoRequest{
    email: string;
    password: string;
}

class AutenticacaoUserService{
    async execute({ email, password }: AutenticacaoRequest){

        const pesquisador = await prismaClient.pesquisador.findFirst({
            where:{
                email: email    
            }
        })

        if(!pesquisador){
            throw new Error("Falha no Login"); 
        }

        const passwordV = await compare(password, pesquisador.password);

        if(!passwordV){
            throw new Error("Falha no Login");
        }

        // Token usuario
        const token = sign(
        {
            nome: pesquisador.nome,
        },
        process.env.JWT,
        {
            subject: pesquisador.id,
            expiresIn: '6h',
        }
        )
      
        return {
            nome: pesquisador.nome,
            token: token,
        }
    }
}

export { AutenticacaoUserService }