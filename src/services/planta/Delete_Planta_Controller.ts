import prismaClient from "../../prisma";

interface PlantaID{
    id: string;
}

class DeletePlantaService{
    async execute({ id }: PlantaID){

        const planta = await prismaClient.planta.delete({
            where:{
                id: id
            }, 
            select: {
                nome_Cientifico: true
            }
        })

        return planta;
    }
}

export { DeletePlantaService }