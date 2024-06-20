import { Request, Response } from "express";
import { GetLocalService } from "../../services/Local/Get";

class GetLocalController {
    async ex(req: Request, res: Response){

        const getLocal = new GetLocalService;
        const locals = await getLocal.execute();

        return res.json(locals);
    }
}

export { GetLocalController }