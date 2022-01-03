import userController from '../controllers/user.controller';
import Router from 'express';
//import userController from 'controllers/user.controller'; //не понимаю почему при таком импорте пишет cant find module controllers/user.controller, хотя в user.model так импортирую module.interface и все ок
//import userController from '@controllers/user.controller'; // и так тож не работает, не могу допереть что не так)
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
