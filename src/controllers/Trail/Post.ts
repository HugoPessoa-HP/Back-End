import { PostTrailService } from "../../services/Trail/Post";
import { Request, Response } from "express";

class PostTrailController {
    async ex(req: Request, res: Response){
        const { name_Trail, reference1, reference2, local_id } = req.body;

        const trailService = new PostTrailService();
        const trail = await trailService.execute({
            name_Trail,
            reference1,
            reference2,
            local_id,
        })

        return res.json(trail);
    }
}
export { PostTrailController };