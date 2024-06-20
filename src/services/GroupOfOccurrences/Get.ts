import prismaClient from "../../prisma";

class GetGpOccurrencesService{
    async execute(){
        const gpOccurrences = await prismaClient.group_of_Occurrences.findMany({
            select:{
                id: true,
                id_Plant: true,
                id_Trail: true,
                family: true,
                origin: true,
                habit: true,
                category: true,
            }
        })

        return gpOccurrences;
    }
}
export { GetGpOccurrencesService }