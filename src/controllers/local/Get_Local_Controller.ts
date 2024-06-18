import { Request, Response } from "express";
import { GetEstadosService } from "../../services/local/Get_Local_Service";

class GetEstadosController {
    async ex(req: Request, res: Response){
        console.log("Olá");
        const getEstados = new GetEstadosService;
        const estados = await getEstados.execute();

        return res.json(estados);
    }
}

export { GetEstadosController }