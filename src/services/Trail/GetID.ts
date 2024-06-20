import prismaClient from "../../prisma";

class GetIdTrailService{
    async execute(trailID: string){
        const i = parseInt(trailID)
        const trail = await prismaClient.trail.findFirst({
            where: {
                id: i,
            }, select: {
                name_Trail: true,
                reference1: true,
                reference2: true,
                local_id: true
            }
        });
        return trail;
    }
}

export { GetIdTrailService }