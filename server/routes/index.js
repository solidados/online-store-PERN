import Router from 'express';
import productRouter from './productRouter.js';
import userRouter from './userRouter.js';
import brandRouter from './brandRouter.js';
import typeRouter from './typeRouter.js';

const router = new Router();

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/product', productRouter)

export default router;