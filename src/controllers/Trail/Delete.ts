import { Request, Response } from 'express';
import { DeleteTrailService } from '../../services/Trail/Delete';

class DeleteTrailController {
    async ex(req: Request, res: Response){

        const id = req.query.researcher_id as string;

        const deleteTrail = new DeleteTrailService();
        const trail = deleteTrail.execute({ id });

        return res.json(trail);
    }
}

export { DeleteTrailController }