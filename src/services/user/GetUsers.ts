import prismaClient from "../../prisma";

class GetUsers{
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

export { GetUsers }