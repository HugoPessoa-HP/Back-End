import { Request, Response } from "express";
import { GetTrails } from "../../services/Trail/Get";

class GetTrailController {
    async ex(req: Request, res: Response){
        
        const getTrail = new GetTrails();
        const trail = await getTrail.ex();

        return res.json(trail);
    }
}

export { GetTrailController }