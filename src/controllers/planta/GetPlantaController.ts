import { Request, Response } from 'express';
import { GetPlantaService } from '../../services/planta/PlantaService';

class GetPlantaController{
    async ex(req: Request, res: Response){

        const getPlantas = new GetPlantaService();
        const plantas = await getPlantas.ex();

        return res.json(plantas);
    }
}

export { GetPlantaController }