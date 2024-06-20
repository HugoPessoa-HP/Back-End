import { Request, Response } from 'express';
import { DeleteOccurrenceService } from '../../services/Occurrences/Delete';
class DeleteOccurrenceController {
    async ex(req: Request, res: Response){

        const id = req.query.occurrences as string;

        const deleteOccurrence = new DeleteOccurrenceService();
        const occurrence = deleteOccurrence.ex({ id });

        return res.json(occurrence);
    }
}

export { DeleteOccurrenceController }