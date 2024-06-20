import prismaClient from "../../prisma";

class GetLocalService{
    async execute(){
        const locations = await prismaClient.local.findMany({
            select:{
                id: true,
                name_Local: true,
                state: true,
                city: true
            }
        })

        return locations;
    }
}
export { GetLocalService }