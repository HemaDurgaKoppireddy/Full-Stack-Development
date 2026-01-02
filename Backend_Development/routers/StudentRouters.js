//importing the student controller
import { getStudents, getStudentById ,addStudents, updateStudents} from "../controllers/StudentController.js";
import express from "express";
//creating the router
const router = express.Router();
router.get('/get-students',getStudents);
// router.post('/add-student',addStudent);
router.post('/add-students',addStudents);
router.get('/get-students-by-id/:userid',getStudentById);
router.put('/update-students/:stdName', updateStudents);
export default router;