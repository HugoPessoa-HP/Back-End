import prismaClient from "../../prisma";

class GetPesquisadoresService{
    async execute(){

        const pesquisadores = await prismaClient.pesquisador.findMany({
            select: {
                nome: true,
                email: true,
            }
        })

        return pesquisadores;
    }
}

export { GetPesquisadoresService }