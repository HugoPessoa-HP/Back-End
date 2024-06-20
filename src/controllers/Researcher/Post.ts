import { Request, Response } from 'express';
import { PostResearcherService } from '../../services/Researcher/Post';

class PostResearcherController{
    async ex(req: Request, res: Response){
        
        const { name, email, cpf, password} = req.body;
        
        const createResearcherService = new PostResearcherService();
        const researcher = await createResearcherService.execute({
            name,
            email,
            cpf,
            password,
        });
        
        return res.json(researcher);
    }
}

export { PostResearcherController }