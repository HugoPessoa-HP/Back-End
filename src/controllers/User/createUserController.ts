import { Request, Response } from 'express';
import { CreateUserService } from "../../services/User/CreateUserService";

class CreateUserController{
    async ex(req: Request, res: Response){
        
        const { nome, email, cpf, password} = req.body;

        const createUserService = new CreateUserService();
        const user = await createUserService.execute({
            nome,
            email,
            cpf,
            password,
        });
        return res.json(user);
    }
}

export { CreateUserController }