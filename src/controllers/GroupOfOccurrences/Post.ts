import { CreateGpService } from "../../services/GroupOfOccurrences/Post";
import { Request, Response } from "express";

class PostGpOccurrencesController {
    async ex(req: Request, res: Response){
        const { id, id_Plant, id_Trail, category, family, origin, habit } = req.body;

        const createGpService = new CreateGpService();
        const gp = await createGpService.execute({
            id,
            id_Plant,
            id_Trail,
            category,
            family,
            origin,
            habit
        })
        console.log(gp);
    }
}

export { PostGpOccurrencesController };