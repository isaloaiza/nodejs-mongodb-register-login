import { Router } from "express";
import {authRequiered} from '../middlewares/valideteToken.js';

const router = Router()

router.get('/tasks', authRequiered, (req, res) => res.send('tasks') )

export default router