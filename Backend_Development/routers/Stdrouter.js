import express from 'express';
import {getStudents,  addData } from "../controllers/Stdcontrollers.js";
const router=express.Router();
router.get('/get-users',getStudents);
// router.post('/add-users',addData);
export default router;