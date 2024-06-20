import prismaClient from "../../prisma";

class GetResearchersService{
    async execute(){

        const researcher = await prismaClient.researcher.findMany({
            select: {
                name: true,
                email: true,
            }
        })

        return researcher;
    }
}

export { GetResearchersService }