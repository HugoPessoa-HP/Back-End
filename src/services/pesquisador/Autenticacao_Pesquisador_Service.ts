import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AutenticacaoRequest{
    email: string;
    password: string;
}

class AutenticacaoPesquisadorService{
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
            throw new Error("Falha no Login!!");
        }
        const id = pesquisador.id.toString()
        // Token usuario
        const token = sign({
            nome: pesquisador.nome,
            cpf: pesquisador.cpf,
            email: pesquisador.email
        },
        process.env.JWT_SECRET,
        {
            subject: id
        }
        )
      
        return {
            nome: pesquisador.nome,
            email: pesquisador.email,
            cpf: pesquisador.cpf,
            token: token,
        }
    }
}

export { AutenticacaoPesquisadorService }