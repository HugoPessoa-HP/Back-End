import { Request, Response } from 'express';
import { GetIdResearcherService } from '../../services/Researcher/GetID';

class GetIdResearcherController{
    async ex(req: Request, res: Response){

        const researcherID = req.researcherID;
        const researcherService = new GetIdResearcherService();

        const researcher = await researcherService.execute(researcherID);

        return res.json(researcher);

        function middleware(){
            if(!researcherID){
                return res.json({ res: true })
            } else {
                return res.json({ res: false })
            }
        }
    }
}

export { GetIdResearcherController }