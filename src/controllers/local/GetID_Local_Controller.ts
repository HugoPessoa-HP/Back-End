import { Request, Response } from 'express'
import { GetLocalService } from "../../services/local/GetID_Local_Service";

class GetLocalController {
    async ex(req: Request, res: Response){

        const id = req.query.local_id as string;
        
        const getLocal = new GetLocalService;
        const local = await getLocal.execute({id});

        return res.json(local);
    }
}

export { GetLocalController }