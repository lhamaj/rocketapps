import express, { Router } from 'express';
import ah from '../middlewares/asyncHandlerMiddleware';
import * as authController from '../controllers/authController';

const router: Router = express.Router();
const authRouter: Router = express.Router();

router.use('/auth', authRouter);

authRouter.get('/nonce', ah(authController.getNonce));

export default router;