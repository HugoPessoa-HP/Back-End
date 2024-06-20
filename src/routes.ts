import { Router, Request, Response } from 'express';
import { authenticator } from './middlewares/Authenticator';

import { AuthenticatorController } from './controllers/Researcher/AuthenticatorController';
import { GetIdResearcherController } from './controllers/Researcher/GetID';
import { GetResearchersController } from './controllers/Researcher/Get';
import { PostResearcherController } from './controllers/Researcher/Post';
import { DeleteResearcherController } from './controllers/Researcher/Delete';

import { GetIdPlantController } from './controllers/Plant/GetID';
import { GetPlantsController } from './controllers/Plant/Get';
import { PostPlantController } from './controllers/Plant/Post';
import { DeletePlantController } from './controllers/Plant/Delete';

import { GetIdtrailController } from './controllers/Trail/GetID';
import { GetTrailController } from './controllers/Trail/Get';
import { PostTrailController } from './controllers/Trail/Post';
import { DeleteTrailController } from './controllers/Trail/Delete';

import { GetIdLocalController } from './controllers/Local/GetID'; 
import { GetLocalController } from './controllers/Local/Get';
import { PostLocalController } from './controllers/Local/Post';
import { DeleteLocalController } from './controllers/Local/Delete';

import { GetGpOccurrencesController } from './controllers/GroupOfOccurrences/Get';
import { GetIdGpOccurrencesController } from './controllers/GroupOfOccurrences/GetID';
import { PostGpOccurrencesController } from './controllers/GroupOfOccurrences/Post';
import { DeleteGpController } from './controllers/GroupOfOccurrences/Delete';

import uploadConfig from './config/multer' 
import multer from 'multer'

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));
// upload.single('file')

// -- Rota Login --
router.post('/login', new AuthenticatorController().ex);

// -- Routes Researchers --
router
    .get('/researchers', new GetResearchersController().ex)
    .get('/researcher:id', new GetIdResearcherController().ex)
    .post('/researcher', new PostResearcherController().ex)
    .delete('/researcher', authenticator, new DeleteResearcherController().ex)
    .put('/researcher:id', authenticator);

// -- Routes Locations --
router
    .get('/locals', new GetLocalController().ex)
    .get('local:id', new GetLocalController().ex)
    .post('/local', new PostLocalController().ex)
    .put('/local:id', authenticator)
    .delete('/local', authenticator, new DeleteLocalController().ex);


// -- Routes Trails
router
    .get('/trail', new GetTrailController().ex)
    .get('/trail:id', new GetIdtrailController().ex)
    .post('/trail', new PostTrailController().ex)
    .put('/trail:id', authenticator)
    .delete('/trail', authenticator, new DeleteTrailController().ex)

// -- Routes Plants --
//upload.single('file')
router
    .get('/plants', new GetPlantsController().ex)
    .get('/plant:id', new GetIdPlantController().ex)
    .post('/plant', new PostPlantController().ex)
    .put('/plant:id', authenticator)
    .delete('/plant', authenticator, new DeletePlantController().ex);


// -- Routes Group of Occurrences --
router
    .get('/gpOccurrences', new GetGpOccurrencesController().ex)
    .get('/gpOccurrence:id', new GetIdGpOccurrencesController().ex)
    .post('/gpOccurrences', new PostGpOccurrencesController().ex)
    .delete('/gpOccurrences', authenticator, new DeleteGpController().ex)
    .put('/gpOccurrences:id', authenticator)
// -- Routes Occurrences -- 
router.post('/occurrence');

/*router.get('/plantas', (req: Request, res: Response) => {
    //throw new Error('Erro na requisição');
    return res.json({ nome: "Sujeito Planta!" });
})
*/ 
export { router };