import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as SearchController from '../controllers/searchControler';
import * as DestroyController from '../controllers/destroyController';
import * as EditController from '../controllers/editController';

const router = Router();

router.get('/', HomeController.home);

router.post('/novousuario', HomeController.newUserAction);
router.get('/search', SearchController.search);
router.get('/destroy/:id', DestroyController.destroy);

router.get('/edit/:id', EditController.editForm);
router.post('/edituser', EditController.edit);


export default router;