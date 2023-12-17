import { Request, Response } from 'express';
import { PostPesquisadorService } from '../../services/pesquisador/Post_Pesquisador_Service';

class PostPesquisadorController{
    async ex(req: Request, res: Response){
        
        const { nome, email, cpf, password} = req.body;

        const createPesquisadorService = new PostPesquisadorService();
        const pesquisador = await createPesquisadorService.execute({
            nome,
            email,
            cpf,
            password,
        });
        
        return res.json(pesquisador);
    }
}

export { PostPesquisadorController }