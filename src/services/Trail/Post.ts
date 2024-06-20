import prismaClient from "../../prisma"

interface TrailRequest{
    name_Trail: string;
    reference1: string;
    reference2: string;
    local_id: string;
}

class PostTrailService {
    async execute({ name_Trail, reference1, reference2, local_id }: TrailRequest) {

        //Verificação
        if (!name_Trail || !local_id) {
            throw new Error("Incomplete Data");
        }
        const i = parseInt(local_id)
        //Verificar Se existe
        const TrailExist = await prismaClient.trail.findFirst({
            where: {
                name_Trail: name_Trail,
                local_id: i,
            }
        });

        if (TrailExist) {
            throw new Error("Already Registered Trail");
        }

        const trail = await prismaClient.trail.create({
            data:{
                name_Trail: name_Trail,
                reference1: reference1,
                reference2: reference2,
                local_id: i
            },
            select:{
                name_Trail: true,
                local_id: true,
            }
        });

        return trail;
    }
}

export { PostTrailService };