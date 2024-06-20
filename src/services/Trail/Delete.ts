import prismaClient from "../../prisma";

interface TrailID{
    id: string;
}

class DeleteTrailService{
    async execute({id}: TrailID){
        const i = parseInt(id);

        const trail = await prismaClient.trail.delete({
            where:{
                id: i
            },select:{
                name_Trail: true,
                local_id: true
            }
        })

        return trail;
    }
}

export { DeleteTrailService }