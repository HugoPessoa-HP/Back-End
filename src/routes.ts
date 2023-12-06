import { Router, Request, Response } from 'express';
import { autenticacao } from './middlewares/Autenticacao';

import { AutenticacaoPesquisadorController } from './controllers/pesquisador/Autenticacao_Controller';
import { GetIdPesquisadorController } from './controllers/pesquisador/GetID_Pesquisador_Controller';
import { GetPesquisadoresController } from './controllers/pesquisador/Get_Pesquisador_Controller';
import { PostPesquisadorController } from './controllers/pesquisador/Post_Pesquisador_Controller';
import { DeletePesquisadorController } from './controllers/pesquisador/Delete_Pesquisador_Controller';

import { GetIdPlantaController } from './controllers/planta/GetID_Planta_Controller';
import { GetPlantasController } from './controllers/planta/Get_Planta_Controller';
import { PostPlantaController } from './controllers/planta/Post_Planta_Controller';
import { DeletePlantaController } from './controllers/planta/Delete_Planta_Controller';

import { GetLocalController } from './controllers/local/GetID_Local_Controller'; 
import { GetLocaisController } from './controllers/local/Get_Local_Controller'; 
import { PostLocalController } from './controllers/local/Post_Local_Controller';
import { DeleteLocalController } from './controllers/local/Delete_Local_Controller'

import uploadConfig from './config/multer' 
import multer from 'multer'

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));
// upload.single('file')

// -- Rota Login
router.post('/login', new AutenticacaoPesquisadorController().ex);

// -- Pesquisadores --
router
    .post('/pesquisador', autenticacao, new PostPesquisadorController().ex)
    .get('/pesquisadores', autenticacao, new GetPesquisadoresController().ex)
    .get('/pesquisador:id', autenticacao, new GetIdPesquisadorController().ex)
    .delete('pesquisador', autenticacao, new DeletePesquisadorController().ex)
    .put('pesquisador', autenticacao);


// -- Rotas Plantas --
router
    .post('/planta', autenticacao, new PostPlantaController().ex)
    .get('/plantas', autenticacao, new GetPlantasController().ex)
    .put('/planta:id', autenticacao, new GetIdPlantaController().ex)
    .delete('/planta', autenticacao);

// -- Rotas Locais --
router
    .get('/locais', new GetLocaisController().ex)
    .get('local:id', new GetLocalController().ex)
    .post('/local', autenticacao)
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