import { PostPlantService } from "../../services/Plant/Post";
import { Request, Response } from "express";

class PostPlantController {
    async ex(req: Request, res: Response){
        const { vernacular1, vernacular2, vernacular3, name_Scientific } = req.body;

        const createPlantService = new PostPlantService();

            const plant = await createPlantService.execute({
                vernacular1,
                vernacular2,
                vernacular3,
                name_Scientific,
            })
            return res.json(plant);
        }
    }

class PostPlantPreController {
    /*
    async ex(req: Request, res: Response){
        const { categoria } = req.body;

        const createPlantService = new PostPlantService();
        
        if(!req.file){
            throw new Error(" Erro de upload de arquivo ")
        }else{
            const { filename: banner } = req.file;  
        
        const vernaculo1 = '';
        const vernaculo2 = '';
        const vernaculo3 = '';
        const nome_Cientifico = '';
        const familia = '';
        const origem = '';
        const habito = '';
        const banner = '';
        const trilha_id = '1';

        const planta = await createPlantaService.executePre({
            vernaculo1,
            vernaculo2,
            vernaculo3,
            nome_Cientifico,
            familia,
            origem,
            habito,
            banner,
            categoria,
        })
        return res.json(planta);

    }
    */
}

export { PostPlantController };