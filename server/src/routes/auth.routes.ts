import Router from 'express';

const router = Router();

//logIn
router.post('./login');

//logOut
router.post('./logout');

//make session
router.get('/auth');

export default router;
