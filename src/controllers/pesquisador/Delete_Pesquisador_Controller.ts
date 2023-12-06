import { Request, Response } from 'express';
import { DeletePesquisadorService } from '../../services/pesquisador/Delete_Pesquisador_Service';

class DeletePesquisadorController {
    async ex(req: Request, res: Response){

        const id = req.query.pesquisador_id as string;

        const deleteLocal = new DeletePesquisadorService();
        const local = deleteLocal.execute({ id });

        return res.json(local);
    }
}

export { DeletePesquisadorController }