import { Request, Response } from 'express';
import { GetPlantasService } from '../../services/planta/Get_Planta_Service';

class GetPlantasController{
    async ex(req: Request, res: Response){

        const getPlantas = new GetPlantasService();
        const plantas = await getPlantas.execute();

        return res.json(plantas);
    }
}
export { GetPlantasController }