import express from 'express';
import { createUser, getUsers, getUserById, updateUserById, deleteUserById} from '../controllers/users.js';

const router = express.Router();

router.post('/users', createUser);
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.put('/users/:id', updateUserById);
router.delete('/users/:id', deleteUserById);

export default router;