import { Request, Response } from 'express';
import { DeleteLocalService} from '../../services/local/DeleteLocalService';

class DeleteLocalController {
    async ex(req: Request, res: Response){

        const id = req.query.local_id as string;

        const deleteLocal = new DeleteLocalService();
        const local = deleteLocal.ex({ id });

        return res.json(local);
    }
}

export { DeleteLocalController }