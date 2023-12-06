import { Request, Response } from 'express';
import { GetIdPesquisadorService } from '../../services/pesquisador/GetID_Pesquisador_Service';

class GetIdPesquisadorController{
    async ex(req: Request, res: Response){

        const pesquisadorID = req.pesquisadorID;
        const pesquisadorService = new GetIdPesquisadorService();

        const pesquisador = await pesquisadorService.execute(pesquisadorID);

        return res.json(pesquisador);

        function middleware(){
            if(!pesquisadorID){
                return res.json({ res: true })
            } else {
                return res.json({ res: false })
            }
        }
    }
}

export { GetIdPesquisadorController }