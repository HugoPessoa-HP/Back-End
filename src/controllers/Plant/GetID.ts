import { Request, Response } from 'express';
import { GetIdPlantService } from '../../services/Plant/GetID';

class GetIdPlantController{
    async ex(req: Request, res: Response){

        const plantID = req.query.plant_id as string;
        const plantService = new GetIdPlantService();

        const plant = await plantService.execute(plantID);

        return res.json(plant);

/*        function middleware(){
            if(!plantaID){
                return res.json({ res: true })
            } else {
                return res.json({ res: false })
            }
        }
*/
    }
}

export { GetIdPlantController }