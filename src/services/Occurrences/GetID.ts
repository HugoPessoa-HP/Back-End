import  prismaClient  from "../../prisma";

interface OccurrencesInterface{
    id: string
}

class GetOccurrencesService{
    
    async execute({ id }: OccurrencesInterface ){
    
    const i = parseInt(id)
    const occurrences = await prismaClient.occurrences.findMany({
        where:{
            id: i
        },
        select:{
            id: true,
            id_gp_occurrence: true,
            banner: true
        }
    });

    return occurrences;
    }
}

export { GetOccurrencesService };