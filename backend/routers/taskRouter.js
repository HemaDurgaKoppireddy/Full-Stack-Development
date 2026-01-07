// import express from 'express';
// import {getData} from "../controllers/taskController.js";

// const router = express.Router()

// router.get('/get-data', getData)

// export default router;


import express from "express";
import {
  addStudent,
  getStudents,
  updateStudent,
  deleteStudent
} from "../controllers/taskController.js";

const router = express.Router();

router.post("/students", addStudent);
router.get("/students", getStudents);
router.put("/students/:id", updateStudent);
router.delete("/students/:id", deleteStudent);

export default router;

