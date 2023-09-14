import express from 'express';
import { createUser, loginUser, googleSignin } from '../controllers/auth.js'; 
import { authenticateJWT } from '../middlewares/authenticateJWT.js';

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser); 
router.post('/google', googleSignin);
router.get('/profile', authenticateJWT, getUserProfile); 

export default router;