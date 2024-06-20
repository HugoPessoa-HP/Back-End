import { CreateOccurrenceService } from "../../services/Occurrences/Post";
import { Request, Response } from "express";

class PostOccurrencesController {
    async ex(req: Request, res: Response){
        const { id_gp_occurrence, banner } = req.body;

        const createOccurrenceService = new CreateOccurrenceService();
        const occurrence = await createOccurrenceService.execute({
            id_gp_occurrence,
            banner,
        })
        console.log(occurrence);

        return res.json(occurrence)
    }
}

export { PostOccurrencesController };