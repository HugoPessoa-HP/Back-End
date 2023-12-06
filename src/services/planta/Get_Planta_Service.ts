import prismaClient from "../../prisma";

class GetPlantasService{
    async execute(){

        const plantas = await prismaClient.planta.findMany({
            select: {
                nome_Cientifico: true,
                familia: true,
                vernaculo1: true,
                vernaculo2: true,
                origem: true,
                habito: true,
            }
        })
        
        return plantas;
    }
}

export { GetPlantasService }