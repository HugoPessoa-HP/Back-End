import { Request, Response } from 'express';
import { GetIdTrailService } from '../../services/Trail/GetID';

class GetIdtrailController{
    async ex(req: Request, res: Response){

        const trailID = req.query.trail_id as string;
        const trailService = new GetIdTrailService();

        const trail = await trailService.execute(trailID);

        return res.json(trail);

        function middleware(){
            if(!trailID){
                return res.json({ res: true })
            } else {
                return res.json({ res: false })
            }
        }
    }
}

export { GetIdtrailController }