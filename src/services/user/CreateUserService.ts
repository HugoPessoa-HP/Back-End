import prismaClient from "../../prisma"
import { hash } from "bcryptjs";

interface UserRequest{
    nome: string;
    email: string;
    cpf: string;
    password: string;
}

class CreateUserService {
    async execute({ nome, email, cpf, password }: UserRequest) {

        //Verificação
        if (!email || !nome || !cpf) {
            throw new Error("Dados Incorretos");
        }
        //Verificar Se existe
        const userExiste = await prismaClient.pesquisador.findFirst({
            where: {
                email: email,
                cpf: cpf,
            }
        });
        if (userExiste) {
            throw new Error("Usuário já Existe");
        }
        
        const passwordHash = await hash(password, 8);

        const user = await prismaClient.pesquisador.create({
            data: {
                nome: nome,
                email: email,
                cpf: cpf,
                password: passwordHash,
            },
            select:{
                nome: true,
                email: true,
            }
        });

        return user;
    }
}

export { CreateUserService };