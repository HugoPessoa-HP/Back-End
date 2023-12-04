import { Request, Response } from 'express'
import { AutenticacaoUserService } from '../../services/user/AutenticacaoUserService';

class AutenticacaoUserController{
    async ex(req: Request, res: Response){
        const { email, password } = req.body;

        const autenticacaoUserService = new AutenticacaoUserService();
        const autenticacao = await autenticacaoUserService.execute({
            email,
            password,
        });
        
        return res.json(autenticacao);

    }
}

export { AutenticacaoUserController }