import prismaClient from "../../prisma";
interface OccurrenceID{
    id: string;
}

class DeleteOccurrenceService{
    async ex({id}: OccurrenceID){

        const i = parseInt(id);
        const occurrence = await prismaClient.occurrences.delete({
            where:{
                id: i
            }, select:{
                id: true
            }
        })
        return occurrence;
    }
}

export { DeleteOccurrenceService }