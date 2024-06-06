import prismaClient from "../../prisma"
import { hash } from "bcryptjs";

interface PesquisadorRequest{
    nome: string;
    email: string;
    cpf: string;
    password: string;
}

class PostPesquisadorService {
    async execute({ nome, email, cpf, password }: PesquisadorRequest) {

        //Verificação
        if (!email || !nome || !cpf) {
            throw new Error("Dados Incorretos");
        }
        //Verificar Se existe
        const pesquisadorExiste = await prismaClient.pesquisador.findFirst({
            where: {
                email: email,
                cpf: cpf,
            }
        });

        if (pesquisadorExiste) {
            throw new Error("Pesquisador já está cadastrado");
        }

        const passwordHash = await hash(password, 8);

        const pesquisador = await prismaClient.pesquisador.create({
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
        console.log(pesquisador)
        return pesquisador;
    }
}

export { PostPesquisadorService };