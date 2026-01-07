import express from 'express';
import {get_user, add_user} from "../controllers/firstController.js";

const router = express.Router();

router.post('/add-user',add_user)
router.get('/get-user', get_user);

export default router;
