import { Request, Response } from 'express';
import { GetGpOccurrencesService } from '../../services/GroupOfOccurrences/Get';

class GetGpOccurrencesController{
    async ex(req: Request, res: Response){

        const getGpOccurrences = new GetGpOccurrencesService();
        const gpOccurrences = await getGpOccurrences.execute();

        return res.json(gpOccurrences);
    }
}
export { GetGpOccurrencesController }