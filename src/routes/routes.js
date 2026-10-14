import { Router } from 'express';
import {
    getStatus,
    receiveMessage,
} from '../controllers/webhook.controller.js';

const router = Router();

router.get('/', getStatus);
router.post('/', receiveMessage);

export default router;