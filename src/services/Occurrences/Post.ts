import  prismaClient  from "../../prisma";
interface OccurrenceRequest{
    id_gp_occurrence: string;
    banner: string;
}

class CreateOccurrenceService{

    async execute({id_gp_occurrence , banner}: OccurrenceRequest){
        if(!id_gp_occurrence || !banner){
            throw new Error("Incomplete Data");
        }

    const i = parseInt(id_gp_occurrence);

    const occurrence = await prismaClient.occurrences.create({
        data:{
            id_gp_occurrence: i,
            banner: banner
        }, select: {
            id: true
        }
    });
    return occurrence;
    }
}

export { CreateOccurrenceService }; 