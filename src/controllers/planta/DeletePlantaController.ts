import { Request, Response } from 'express';
import { DeletePlantaService } from '../../services/planta/Delete_Planta_Controller';

class DeletePlantaController {
    async ex(req: Request, res: Response){

        const id = req.query.planta_id as string;

        const deletePlanta = new DeletePlantaService();
        const local = deletePlanta.execute({ id });

        return res.json(local);
    }
}

export { DeletePlantaController }