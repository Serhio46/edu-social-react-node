import { Express, Request, Response } from 'express';
import userController from '../controllers/user.controller';
import Router from 'express';

const router = Router();

//create user
router.post('/', userController.registration);
//delete user
router.delete('/:id', userController.deleteUser);
//update user
router.put('/:id', userController.updateUser);
//get user
router.get('/:id', userController.getUser);

export default router;
