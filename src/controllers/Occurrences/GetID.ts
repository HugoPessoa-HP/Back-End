import { Request, Response } from 'express'
import { GetIdOccurrencesService } from "../../services/Occurrences/GetID";

class GetIdOccurrencesController {
    async ex(req: Request, res: Response){

        const id = req.query.occurrences_id as string;
        
        const getOccurrences = new GetIdOccurrencesService();
        const occurrence = await getOccurrences.execute({id});
        return res.json(occurrence);
    }
}

export { GetIdOccurrencesController }