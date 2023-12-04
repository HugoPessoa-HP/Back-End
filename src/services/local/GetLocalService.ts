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

class GetLocaisService{
    async execute(){ 
        const locais = prismaClient.local.findMany({
            select:{
                nome: true,
                cidade: true,
                estado: true,
                referencia1: true,
            }
        })

        return locais;
    }
    
} 

export { GetLocalService , GetLocaisService };
