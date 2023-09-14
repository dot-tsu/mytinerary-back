import express from 'express';
import { createUser, loginUser, googleSignin, getUserProfile } from '../controllers/auth.js'; 
import { authenticateJWT } from '../middleware/auth.js';

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser); 
router.post('/google', googleSignin);
router.get('/profile', authenticateJWT, getUserProfile); 

export default router;