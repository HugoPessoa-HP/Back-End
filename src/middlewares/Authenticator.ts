import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface Payload{
    sub: string;
}

function authenticator(req: Request, res: Response, next: NextFunction){

    const token = req.headers.authorization;

    if(!token){
        return res.status(401).end();
    }

    const [, tokenI] = token.split(" ");
    
    //verificação do Token
    try{
        const { sub } = verify(
            tokenI,
            process.env.JWT
        ) as Payload;

        req.researcherID = sub;

        return next();
    }catch(erro){
        res.status(401).end();
    }

}

export { authenticator }