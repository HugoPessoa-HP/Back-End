import prismaClient from "../../prisma";

interface LocalID{
    id: string;
}

class DeleteLocalService{
    async ex({id}: LocalID){

        const local = await prismaClient.local.delete({
            where:{
                id: id
            }
        })

        return local;
    }
}

export { DeleteLocalService }