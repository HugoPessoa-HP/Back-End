import { Request, Response } from "express";
import { GetResearchersService } from "../../services/Researcher/Get";

class GetResearchersController {
    async ex(req: Request, res: Response){
        
        const getResearchers = new GetResearchersService();
        const researchers = await getResearchers.execute();

        return res.json(researchers);
    }
}

export { GetResearchersController }