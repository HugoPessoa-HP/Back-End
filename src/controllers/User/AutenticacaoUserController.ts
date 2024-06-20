import { Request, Response } from 'express'
import { AuthenticatorUserService } from '../../services/User/AutenticacaoUserService';

class AutenticatorUserController{
    async ex(req: Request, res: Response){
        const { email, password } = req.body;

        const authenticatorUserService = new AuthenticatorUserService();
        const authenticator = await authenticatorUserService.execute({
            email,
            password,
        });
        
        return res.json(authenticator);

    }
}

export { AutenticatorUserController }