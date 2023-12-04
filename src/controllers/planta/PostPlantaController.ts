import { CreatePlantaService } from "../../services/planta/PlantaService";
import { Request, Response } from "express";

class CreatePlantaController {
    async ex(req: Request, res: Response){
        const { vernaculo1, vernaculo2, vernaculo3, nome_Cientifico, familia, origem, habito} = req.body;

        const createPlantaService = new CreatePlantaService;
        const planta = await createPlantaService.execute({
            vernaculo1,
            vernaculo2,
            vernaculo3,
            nome_Cientifico,
            familia,
            origem,
            habito,
        })
    }
}

export { CreatePlantaController };