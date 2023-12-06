import { CreateLocalService } from "../../services/local/PostLocalService";
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
    }
}

export { PostLocalController };