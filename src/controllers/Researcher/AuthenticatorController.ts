import { Request, Response } from 'express'
import { AuthenticatorService } from '../../services/Researcher/AuthenticatorService';

class AuthenticatorController{
    async ex(req: Request, res: Response){
        const { email, password } = req.body;

        const authenticatorService = new AuthenticatorService();
        const authenticator = await authenticatorService.execute({
            email,
            password,
        });
        
        return res.json(authenticator);

    }
}

export { AuthenticatorController }