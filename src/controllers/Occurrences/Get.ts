import { Request, Response } from 'express';
import { GetOccurrencesService } from '../../services/Occurrences/Get';

class GetOccurrencesController{
    async ex(req: Request, res: Response){

        const getOccurrences = new GetOccurrencesService();
        const occurrences = await getOccurrences.execute();

        return res.json(occurrences);
    }
}
export { GetOccurrencesController }