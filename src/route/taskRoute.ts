import {TaskController} from "../controller/TaskController";
import { Router } from "express"

const taskRoute = Router();

taskRoute.post("/AddToDo",TaskController.AddToDo)
taskRoute.get("/GetToDo/:id",TaskController.getTaskById)
taskRoute.get("/GetAllToDo",TaskController.getAllTasks)
taskRoute.post("/UpdateTask",TaskController.UpdateToDo)

export default taskRoute;