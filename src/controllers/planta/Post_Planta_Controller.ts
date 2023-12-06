import { PostPlantaService } from "../../services/planta/Post_Planta_Service";
import { Request, Response } from "express";

class PostPlantaController {
    async ex(req: Request, res: Response){
        const { vernaculo1, vernaculo2, vernaculo3, nome_Cientifico, familia, origem, habito} = req.body;

        const createPlantaService = new PostPlantaService;
        const planta = await createPlantaService.execute({
            vernaculo1,
            vernaculo2,
            vernaculo3,
            nome_Cientifico,
            familia,
            origem,
            habito,
        })
        return res.json(planta);
    }
}

export { PostPlantaController };