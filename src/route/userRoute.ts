import {UserController} from "../controller/UserController";
import { Router } from "express"

const userRoute = Router();

userRoute.get("/GetAllUser",UserController.FindAllUser);
userRoute.post("/SignUp",UserController.CreateUser);

export default userRoute;