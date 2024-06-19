import { Request, Response } from 'express';
import { GetIdPlantaService } from '../../services/planta/GetID_Planta_Service';

class GetIdPlantaController{
    async ex(req: Request, res: Response){

        const plantaID = req.query.planta_id as string;
        const plantaService = new GetIdPlantaService();

        const planta = await plantaService.execute(plantaID);

        return res.json(planta);

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

export { GetIdPlantaController }