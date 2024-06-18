import { CreateLocalService } from "../../services/local/Post_Local_Service";
import { Request, Response } from "express";

class PostLocalController {
    async ex(req: Request, res: Response){
        const { nome, estado, cidade, referencia1, referencia2 } = req.body;

        const createLocalService = new CreateLocalService;
        const local = await createLocalService.execute({
            nome,
            estado,
            cidade,
            referencia1,
            referencia2,
        })
        console.log(local);
    }
}

export { PostLocalController };