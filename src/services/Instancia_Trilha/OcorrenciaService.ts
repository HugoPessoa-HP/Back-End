import  prismaClient  from "../../prisma";

export interface OcorrenciaRequest {
    long: GLfloat;
    lat: GLfloat;
    gps: GLfloat;
    status: boolean;
    pesquisador_id: string;
    planta_id: string;
    local_id: string;
}

class CreateOcorrenciaService{

    async execute({ long, lat, gps, status, pesquisador_id, planta_id, local_id}: OcorrenciaRequest){
        if(!long || !lat || !gps || !status || !pesquisador_id || !planta_id || !local_id){
            throw new Error("Dados Incompletos");
        }

    await prismaClient.ocorrencia.create({
        data:{
            long: long,
            lat: lat,
            gps: gps,
            status: status,
            pesquisador_id: pesquisador_id,
            planta_id: planta_id,
            local_id: local_id,
        }
    });


    }
}

export { CreateOcorrenciaService }; 