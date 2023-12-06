import { Request, Response } from 'express'
import { AutenticacaoPesquisadorService } from '../../services/pesquisador/Autenticacao_Pesquisador_Service';

class AutenticacaoPesquisadorController{
    async ex(req: Request, res: Response){
        const { email, password } = req.body;

        const autenticacaoService = new AutenticacaoPesquisadorService();
        const autenticacao = await autenticacaoService.execute({
            email,
            password,
        });
        
        return res.json(autenticacao);

    }
}

export { AutenticacaoPesquisadorController }