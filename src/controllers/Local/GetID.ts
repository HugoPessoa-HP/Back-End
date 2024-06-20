import { Request, Response } from 'express'
import { GetLocalService } from "../../services/Local/GetID";

class GetIdLocalController {
    async ex(req: Request, res: Response){

        const id = req.query.local_id as string;
        
        const getLocal = new GetLocalService;
        const local = await getLocal.execute({id});

        return res.json(local);
    }
}

export { GetIdLocalController }