import prismaClient from "../../prisma";

class GetIdPlantService{
    async execute(plantID: string){
        const i = parseInt(plantID);
        const plant = await prismaClient.plant.findFirst({
            where: {
                id: i,
            }, select: {
                name_Scientific: true,
                vernacular1: true,
                vernacular2: true,
                vernacular3: true
            }
        });
        return plant;
    }
}
export { GetIdPlantService }