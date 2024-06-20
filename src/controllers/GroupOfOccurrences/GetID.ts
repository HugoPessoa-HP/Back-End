import { Request, Response } from 'express'
import { GetGpOccurrencesService } from "../../services/GroupOfOccurrences/GetID";

class GetIdGpOccurrencesController {
    async ex(req: Request, res: Response){

        const id = req.query.gpOccurrences_id as string;
        
        const getGp = new GetGpOccurrencesService();
        const gp = await getGp.execute({id});

        return res.json(gp);
    }
}

export { GetIdGpOccurrencesController }