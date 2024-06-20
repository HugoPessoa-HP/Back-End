import { CreateLocalService } from "../../services/Local/Post";
import { Request, Response } from "express";

class PostLocalController {
    async ex(req: Request, res: Response){
        const { name, state, city, reference1 } = req.body;

        const createLocalService = new CreateLocalService;
        const local = await createLocalService.execute({
            name,
            state,
            city,
            reference1,
        })
        console.log(local);
    }
}

export { PostLocalController };