import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken"

interface AuthenticatorRequest{
    email: string;
    password: string;
}

class AuthenticatorUserService{
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
            throw new Error("Login failed");
        }

        // Token user
/*        const token = sign(
        {
            nome: researcher.name,
        },
        process.env.JWT,
        {
            subject: researcher.id,
            expiresIn: '6h',
        }
        )
*/      
        return {
            nome: researcher.name,
            //token: token,
        }
    }
}

export { AuthenticatorUserService }