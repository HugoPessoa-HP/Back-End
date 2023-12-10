import { PostPlantaService } from "../../services/planta/Post_Planta_Service";
import { Request, Response } from "express";

class PostPlantaController {
    async ex(req: Request, res: Response){
        const { vernaculo1, vernaculo2, vernaculo3, nome_Cientifico, familia, origem, habito} = req.body;

        const createPlantaService = new PostPlantaService;

        if(!req.file){
            throw new Error(" Erro de upload de arquivo ")
        }else{
            const { filename: banner } = req.file;  

            const planta = await createPlantaService.execute({
                vernaculo1,
                vernaculo2,
                vernaculo3,
                nome_Cientifico,
                familia,
                origem,
                habito,
                banner,
            })
            return res.json(planta);
        }

    }
}

export { PostPlantaController };