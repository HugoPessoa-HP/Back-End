import prismaClient from "../../prisma";

class GetPlantsService{
    async execute(){
        const plants = await prismaClient.plant.findMany({
            select: {
                id: true,
                name_Scientific: true,
                vernacular1: true,
                vernacular2: true,
                vernacular3: true
            }
        })
        
        return plants;
    }
}

export { GetPlantsService }