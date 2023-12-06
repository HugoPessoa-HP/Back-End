import { Request, Response } from "express";
import { GetLocaisService } from "../../services/local/Get_Local_Service";

class GetLocaisController {
    async ex(req: Request, res: Response){
        
        const getLocais = new GetLocaisService;
        const locais = await getLocais.execute();

        return res.json(locais);
    }
}

export { GetLocaisController }