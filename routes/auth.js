import express from 'express';
import { createUser, loginUser, googleSignin } from '../controllers/auth.js'; 

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser); 
router.post('/google', googleSignin);

export default router;