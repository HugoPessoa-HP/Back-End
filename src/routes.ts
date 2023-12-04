import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/user/createUserController';
import { CreateLocalController } from './controllers/local/PostLocalController';
import { CreatePlantaController } from './controllers/planta/PostPlantaController';
import { CreateOcorrenciaController } from './controllers/ocorrencia/PostPlantaController';
import { AutenticacaoUserController } from './controllers/user/AutenticacaoUserController';
import { UserController } from './controllers/user/UserController';
import { autenticacao } from './middlewares/Autenticacao';
import { GetPesquisadorController } from './controllers/pesquisador/GetPesquisadorController';
import { GetLocaisController, GetLocalController } from './controllers/local/GetLocalController';
import uploadConfig from './config/multer' 
import multer from 'multer'

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));
// upload.single('file')

// -- Rota Login
router.post('/login', new AutenticacaoUserController().ex);

// -- Rotas User --
router.get('/users', autenticacao, new UserController().ex);
router.post('/users', new CreateUserController().ex);
router.put("/users");
router.delete("/users");

// -- Pesquisadores --
router.get('/pesquisadores', autenticacao, new GetPesquisadorController().ex);

// -- Rotas Locais --
router.get('/locais', new GetLocaisController().ex);
router.get('local:id', new GetLocalController().ex);
router.post('/local', autenticacao, new CreateLocalController().ex);
router.put('/local');
router.delete('/local');

// -- Rotas Plantas --
router.get('/planta');
router.post('/planta', autenticacao, new CreatePlantaController().ex);
router.put('/planta', autenticacao);
router.delete('/planta', autenticacao);

// -- Rotas Ocorrencias -- 
router.post('/ocorrencia', new CreateOcorrenciaController().ex);

/*router.get('/plantas', (req: Request, res: Response) => {
    //throw new Error('Erro na requisição');
    return res.json({ nome: "Sujeito Planta!" });
})
*/ 
export { router };