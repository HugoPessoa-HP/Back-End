import prismaClient from "../../prisma";

interface ResearcherID{
    id: string;
}

class DeleteResearcherService{
    async execute({id}: ResearcherID){
        const i = parseInt(id);

        const researcher = await prismaClient.researcher.delete({
            where:{
                id: i
            },select:{
                name: true,
                email: true
            }
        })

        return researcher;
    }
}

export { DeleteResearcherService }