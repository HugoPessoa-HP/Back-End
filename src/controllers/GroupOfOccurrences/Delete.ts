import { Request, Response } from 'express';
import { DeleteGpService } from '../../services/GroupOfOccurrences/Delete';
class DeleteGpController {
    async ex(req: Request, res: Response){

        const id = req.query.gp_occurrences_id as string;

        const deleteGp = new DeleteGpService();
        const gp = deleteGp.ex({ id });

        return res.json(gp);
    }
}

export { DeleteGpController }