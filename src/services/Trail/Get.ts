import prismaClient from "../../prisma";

class GetTrails{
    async ex(){

        const trails = await prismaClient.trail.findMany({
            select: {
                name_Trail: true,
                reference1: true,
                reference2: true,
                local_id: true
            }
        })

        return trails;
    }
}

export { GetTrails }