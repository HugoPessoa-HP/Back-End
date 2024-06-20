import prismaClient from "../../prisma";

interface GpID{
    id: string;
}

class DeleteGpService{
    async ex({id}: GpID){

        const i = parseInt(id);
        const gp = await prismaClient.group_of_Occurrences.delete({
            where:{
                id: i
            }, select:{
                id: true
            }
        })
        return gp;
    }
}

export { DeleteGpService }