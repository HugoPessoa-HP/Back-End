import prismaClient from "../../prisma";

class GetGpOccurrencesService{
    async execute(){
        const gpOccurrences = await prismaClient.estado.findMany({
            select:{
                nome_Estado: true,
            }
        })

        return gpOccurrences;
    }
}
export { GetGpOccurrencesService }