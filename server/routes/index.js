import Router from 'express';
import productRouter from './productRouter';
import userRouter from './userRouter';
import brandRouter from './brandRouter';
import typeRouter from './typeRouter';

const router = new Router();

router.use('/user', userRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)
router.use('/product', productRouter)

export default router;