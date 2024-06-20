import prismaClient from "../../prisma";

interface PlantID{
    id: string;
}

class DeletePlantService{
    async execute({ id }: PlantID){

        const i = parseInt(id);
        const plant = await prismaClient.plant.delete({
            where:{
                id: i
            },
            select: {
                name_Scientific: true
            }
        })

        return plant;
    }
}

export { DeletePlantService }