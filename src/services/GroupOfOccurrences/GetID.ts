import  prismaClient  from "../../prisma";

interface GpOccurrencesInterface{
    id: string
}

class GetGpOccurrencesService{

    async execute({ id }: GpOccurrencesInterface ){
    
    const i = parseInt(id)
    const gpOccurrences = await prismaClient.group_of_Occurrences.findMany({
        where:{
            id: i
        },
        select:{
            id_Plant: true,
            id_Trail: true,
            family: true,
            origin: true,
            habit: true,
            category: true
        }
    });
    
    return gpOccurrences;
    }
}

export { GetGpOccurrencesService };