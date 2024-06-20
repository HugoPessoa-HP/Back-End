import { Request, Response } from 'express';
import { GetPlantsService } from '../../services/Plant/GetPlantsService';

class GetPlantsController{
    async ex(req: Request, res: Response){

        const getPlants = new GetPlantsService();
        const plants = await getPlants.execute();

        return res.json(plants);
    }
}
export { GetPlantsController }