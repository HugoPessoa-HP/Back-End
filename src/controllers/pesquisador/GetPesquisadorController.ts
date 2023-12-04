import { Request, Response } from 'express';
import { GetPesquisadorService } from '../../services/pesquisador/PesquisadorService';

class GetPesquisadorController{
    async ex(req: Request, res: Response){

        const getPesquisadores = new GetPesquisadorService();
        const pesquisadores = await getPesquisadores.ex();

        return res.json(pesquisadores);
    }
}

export { GetPesquisadorController }