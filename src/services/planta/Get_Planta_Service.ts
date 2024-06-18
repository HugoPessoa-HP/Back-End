import prismaClient from "../../prisma";

class GetPlantasService{
    async execute(){
        console.log('Olá')
        const plantas = await prismaClient.planta.findFirst({
            select: {
                id: true,
                nome_Cientifico: true,
                familia: true,
                vernaculo1: true,
                vernaculo2: true,
                origem: true,
                habito: true,
                categoria: true,
            }
        })
        
        return plantas;
    }
}

export { GetPlantasService }