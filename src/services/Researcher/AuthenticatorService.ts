import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthenticatorRequest{
    email: string;
    password: string;
}

class AuthenticatorService{
    async execute({ email, password }: AuthenticatorRequest){

        const researcher = await prismaClient.researcher.findFirst({
            where:{
                email: email
            }
        })
        
        if(!researcher){
            throw new Error("Login failed");
        }

        const passwordV = await compare(password, researcher.password);
        
        if(!passwordV){
            throw new Error("Falha no Login!!");
        }
        const id = researcher.id.toString()
        // Token usuario
        const token = sign({
            name: researcher.name,
            cpf: researcher.cpf,
            email: researcher.email
        },
        process.env.JWT_SECRET,
        {
            subject: id
        }
        )
      
        return {
            name: researcher.name,
            email: researcher.email,
            cpf: researcher.cpf,
            token: token,
        }
    }
}

export { AuthenticatorService }