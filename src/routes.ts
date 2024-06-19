import { Router, Request, Response } from 'express';
import { autenticacao } from './middlewares/Autenticacao';

import { AutenticacaoPesquisadorController } from './controllers/pesquisador/Autenticacao_Controller';
import { GetIdPesquisadorController } from './controllers/pesquisador/GetID_Pesquisador_Controller';
import { GetPesquisadoresController } from './controllers/pesquisador/Get_Pesquisador_Controller';
import { PostPesquisadorController } from './controllers/pesquisador/Post_Pesquisador_Controller';
import { DeletePesquisadorController } from './controllers/pesquisador/Delete_Pesquisador_Controller';

import { GetIdPlantaController } from './controllers/planta/GetIDPlantaController';
import { GetPlantasController } from './controllers/planta/GetPlantaController';
//import { PostPlantaController } from './controllers/planta/Post_Planta_Controller';
import { DeletePlantaController } from './controllers/planta/DeletePlantaController';

import { GetLocalController } from './controllers/local/GetID_Local_Controller'; 
import { GetEstadosController } from './controllers/local/Get_Local_Controller'; 
import { PostLocalController } from './controllers/local/Post_Local_Controller';
import { DeleteLocalController } from './controllers/local/Delete_Local_Controller'

import uploadConfig from './config/multer' 
import multer from 'multer'
import { PostPlantaAlunoController } from './controllers/planta/PostPlantaController';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));
// upload.single('file')

// -- Rota Login
router.post('/login', new AutenticacaoPesquisadorController().ex);

// -- Pesquisadores --
router
    .post('/pesquisador', new PostPesquisadorController().ex)
    .get('/pesquisadores', new GetPesquisadoresController().ex)
    .get('/pesquisador:id', new GetIdPesquisadorController().ex)
    .delete('pesquisador', autenticacao, new DeletePesquisadorController().ex)
    .put('pesquisador', autenticacao);

// -- Rotas Plantas --
//upload.single('file')
router
    .post('/planta', new PostPlantaAlunoController().ex)
    .get('/plantas', new GetPlantasController().ex)
    .put('/planta:id', new GetIdPlantaController().ex)
    .delete('/planta');

// -- Rotas Locais --
router
    .get('/estados', new GetEstadosController().ex)
    .get('local:id', new GetLocalController().ex)
    .post('/local', new PostLocalController().ex)
    .put('/local')
    .delete('/local');

// -- Rotas Ocorrencias -- 
router.post('/ocorrencia');

/*router.get('/plantas', (req: Request, res: Response) => {
    //throw new Error('Erro na requisição');
    return res.json({ nome: "Sujeito Planta!" });
})
*/ 
export { router };