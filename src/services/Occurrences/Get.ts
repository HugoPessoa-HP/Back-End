import prismaClient from "../../prisma";

class GetOccurrencesService{
    async execute(){
        const occurrences = await prismaClient.occurrences.findMany({
            select:{
                id: true,
                id_gp_occurrence: true,
                banner: true
            }
        })

        return occurrences;
    }
}
export { GetOccurrencesService }