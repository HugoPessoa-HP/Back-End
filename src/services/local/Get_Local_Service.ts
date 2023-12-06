import prismaClient from "../../prisma";

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

export { GetLocaisService }