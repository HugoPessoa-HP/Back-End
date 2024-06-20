import prismaClient from "../../prisma";

class GetIdResearcherService{
    async execute(researcherID: string){
        const i = parseInt(researcherID)
        const pesquisador = await prismaClient.researcher.findFirst({
            where: {
                id: i,
            }, select: {
                name: true,
                email: true,
                cpf: true
            }
        });
        return pesquisador;
    }
}

export { GetIdResearcherService }