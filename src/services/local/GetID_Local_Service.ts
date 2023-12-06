import  prismaClient  from "../../prisma";

interface LocalInterface{
    id: string
}

class GetLocalService{

    async execute({ id }: LocalInterface ){

    const local = await prismaClient.local.findMany({
        where:{
            id: id
        },
        select:{
            nome: true,
            estado: true,
            cidade: true ,
            referencia1: true,
            referencia2: true,
        }
    });
    
    return local;

    }

}

export { GetLocalService };
