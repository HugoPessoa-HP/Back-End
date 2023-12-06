import prismaClient from "../../prisma";

class GetIdPesquisadorService{
    async execute(pesquisadorID: string){
        const pesquisador = await prismaClient.pesquisador.findFirst({
            where: {
                id: pesquisadorID,
            }, select: {
                nome: true,
                email: true,
                cpf: true
            }
        });
        return pesquisador;
    }
}
export { GetIdPesquisadorService }