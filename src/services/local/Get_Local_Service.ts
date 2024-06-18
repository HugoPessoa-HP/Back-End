import prismaClient from "../../prisma";

class GetEstadosService{
    async execute(){
        const estados = await prismaClient.estado.findMany({
            select:{
                nome_Estado: true,
            }
        })

        return estados;
    }
}
export { GetEstadosService }