import { Request, Response } from 'express';
import { DeletePlantService } from '../../services/Plant/Delete';

class DeletePlantController {
    async ex(req: Request, res: Response){

        const id = req.query.planta_id as string;

        const deletePlant = new DeletePlantService();
        const plant = deletePlant.execute({ id });

        return res.json(plant);
    }
}

export { DeletePlantController }