import { Request, Response } from 'express';
import { UserService } from '../../services/user/UserService';

class UserController{
    async ex(req: Request, res: Response){

        const userID = req.userID;
        const userService = new UserService();

        const user = await userService.ex(userID);

        return res.json(user);

        function middleware(){
            if(!userID){
                return res.json({ res: true })
            } else {
                return res.json({ res: false })
            }
        }
    }
}

export { UserController }