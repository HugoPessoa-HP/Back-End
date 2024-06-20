import prismaClient from "../../prisma"
import { hash } from "bcryptjs";

interface UserRequest{
    name: string;
    email: string;
    cpf: string;
    password: string;
}

class CreateUserService {
    async execute({ name, email, cpf, password }: UserRequest) {

        //Verificação
        if (!email || !name || !cpf) {
            throw new Error("Incorrect Data");
        }
        //Verificar Se existe
        const userExist = await prismaClient.researcher.findFirst({
            where: {
                email: email,
                cpf: cpf,
            }
        });
        if (userExist) {
            throw new Error("User already exists");
        }
        
        const passwordHash = await hash(password, 8);

        const user = await prismaClient.researcher.create({
            data: {
                name: name,
                email: email,
                cpf: cpf,
                password: passwordHash,
            },
            select:{
                name: true,
                email: true,
            }
        });

        return user;
    }
}

export { CreateUserService };