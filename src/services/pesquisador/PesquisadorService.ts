import prismaClient from "../../prisma";

class GetPesquisadorService{
    async ex(){

        const users = await prismaClient.pesquisador.findMany({
            select: {
                nome: true,
                email: true
            }
        })

        return users;
    }
}

export { GetPesquisadorService }