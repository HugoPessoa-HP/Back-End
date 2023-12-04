import { Request, Response } from "express";
import { GetLocalService } from "../../services/local/GetLocalService";
import { GetLocaisService } from "../../services/local/GetLocalService";

class GetLocalController {
    async ex(req: Request, res: Response){

        const { id } = req.params;
        
        const getLocal = new GetLocalService;
        const local = await getLocal.execute({id});

        return res.json(local);
    }
}

class GetLocaisController {
    async ex(req: Request, res: Response){
        
        const getLocais = new GetLocaisService;
        const locais = await getLocais.execute();

        return res.json(locais);
    }
}

export { GetLocalController , GetLocaisController }