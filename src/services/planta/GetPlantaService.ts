import prismaClient from "../../prisma";

class GetPlantaService{
    async ex(){

        const plantas = await prismaClient.planta.findMany({
            select: {
                vernaculo1: true,
                vernaculo2: true,
                familia: true,
                origem: true,
                habito: true
            }
        })
        
        return plantas;
    }
}

export { GetPlantaService }