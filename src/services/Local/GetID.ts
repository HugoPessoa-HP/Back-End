import  prismaClient  from "../../prisma";

interface LocalInterface{
    id: string
}

class GetLocalService{

    async execute({ id }: LocalInterface ){
    
        const i = parseInt(id)
    const local = await prismaClient.local.findMany({
        where:{
            id: i
        },
        select:{
            name_Local: true,
            state: true,
            city: true ,
        }
    });
    
    return local;

    }

}

export { GetLocalService };
