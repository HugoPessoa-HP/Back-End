import prismaClient from "../../prisma";

interface PesquisadorID{
    id: string;
}

class DeletePesquisadorService{
    async execute({id}: PesquisadorID){

        const pesquisador = await prismaClient.pesquisador.delete({
            where:{
                id: id
            }
        })

        return pesquisador;
    }
}

export { DeletePesquisadorService }