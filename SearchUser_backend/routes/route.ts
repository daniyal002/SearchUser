import express from 'express';
import userVerificationController from '../controllers/userVerificationController';

const router = express.Router();

router.post('/userVerification', userVerificationController.userVerification);

export default router;
