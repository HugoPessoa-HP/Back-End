import { Request, Response } from 'express';
import { DeleteResearcherService } from '../../services/Researcher/Delete';

class DeleteResearcherController {
    async ex(req: Request, res: Response){

        const id = req.query.researcher_id as string;

        const deleteResearcher = new DeleteResearcherService();
        const researcher = deleteResearcher.execute({ id });

        return res.json(researcher);
    }
}

export { DeleteResearcherController }