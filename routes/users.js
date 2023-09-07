import express from 'express';
import { getUsers, getUserById, updateUserById, deleteUserById} from '../controllers/users.js';

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUserById);
router.delete('/:id', deleteUserById);

export default router;