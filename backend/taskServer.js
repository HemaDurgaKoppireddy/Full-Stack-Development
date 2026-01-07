import express from "express";
import cors from "cors";
import studentRouter from "./routers/taskRouter.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", studentRouter);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
