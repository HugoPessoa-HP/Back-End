import { Request, Response } from "express";
import { GetPesquisadoresService } from "../../services/pesquisador/Get_Pesquisador_Service";


class GetPesquisadoresController {
    async ex(req: Request, res: Response){
        
        const getPesquisadores = new GetPesquisadoresService;
        const pesquisadores = await getPesquisadores.execute();

        return res.json(pesquisadores);
    }
}

export { GetPesquisadoresController }