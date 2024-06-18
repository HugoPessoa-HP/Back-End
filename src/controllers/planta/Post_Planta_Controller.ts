import { PostPlantaService } from "../../services/planta/Post_Planta_Service";
import { Request, Response } from "express";

class PostPlantaController {
    /*
    async ex(req: Request, res: Response){
        const { vernaculo1, vernaculo2, vernaculo3, nome_Cientifico, familia, origem, habito, trilha_id} = req.body;

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
                trilha_id,
            })
            return res.json(planta);
        }

    }
    */
}

class PostPlantaAlunoController {
    async ex(req: Request, res: Response){
        const { categoria } = req.body;

        const createPlantaService = new PostPlantaService;
        /*
        if(!req.file){
            throw new Error(" Erro de upload de arquivo ")
        }else{
            const { filename: banner } = req.file;  
        */
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
}

export { PostPlantaAlunoController };