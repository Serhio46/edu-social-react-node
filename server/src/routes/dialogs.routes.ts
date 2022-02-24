import { Router } from 'express';
import dialogController from '../controllers/dialog.controller';

const router = Router();

//create dialog with another person
router.post('/', dialogController.createDialog);

//get dialogs of person
router.get('/:userId', dialogController.getAllComponions);

export default router;
