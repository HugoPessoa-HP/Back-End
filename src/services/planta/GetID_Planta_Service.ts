import prismaClient from "../../prisma";

class GetIdPlantaService{
    async execute(plantaID: string){
        const planta = await prismaClient.planta.findFirst({
            where: {
                id: plantaID,
            }, select: {
                nome_Cientifico: true,
                familia: true,
                origem: true,
                vernaculo1: true,
            }
        });
        return planta;
    }
}
export { GetIdPlantaService }