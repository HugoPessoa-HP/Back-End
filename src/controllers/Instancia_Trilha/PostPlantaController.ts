import { CreateOcorrenciaService } from "../../services/Instancia_Trilha/OcorrenciaService";
import { Request, Response } from "express";

class CreateOcorrenciaController {
    async ex(req: Request, res: Response){
        const { long, lat, gps, status, pesquisador_id, planta_id, local_id } = req.body;

        if(!req.file){
            throw new Error("error upload file")
        }else{
            
            const { originalname, filename } = req.file;
        }

        const createOcorrenciaService = new CreateOcorrenciaService();
        const ocorrencia = await createOcorrenciaService.execute({
            long,
            lat,
            gps,
            status,
            pesquisador_id,
            planta_id,
            local_id,
        })

        return res.json(ocorrencia);
    }
}
export { CreateOcorrenciaController };