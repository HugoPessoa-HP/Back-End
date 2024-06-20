import prismaClient from "../../prisma";

interface LocalID{
    id: string;
}

class DeleteLocalService{
    async ex({id}: LocalID){

        const i = parseInt(id)
        const local = await prismaClient.local.delete({
            where:{
                id: i
            }
        })

        return local;
    }
}

export { DeleteLocalService }