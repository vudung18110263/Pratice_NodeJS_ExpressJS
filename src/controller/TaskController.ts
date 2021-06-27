import {Connection, getConnection, getRepository} from "typeorm";
import {Request, Response} from "express";
import * as moment from 'moment';
import {Tasks} from "../entity/Tasks";
import {Users} from "../entity/Users";

export class TaskController{
    static AddToDo = async(req:Request, res:Response)=>{
        const userRepository = getRepository(Users);
        const taskRepository = getRepository(Tasks);
        const user = await userRepository.findOne({id:req.body.userId});
        if(user){

            const dateFormat = "YYYY-MM-DD HH:mm:ss"

            const task = new Tasks();
            task.taskName=req.body.taskName
            task.taskDescription=req.body.taskDescription
            task.expireDate=req.body.expireDate
            task.taskStatus="NEW"
            task.updatedTime=""
            task.createdTime= moment(new Date()).format(dateFormat);
            task.user=user;

            await taskRepository.manager.save(task);
            res.json(task);
            return
        }
        res.json("fail");
    }
    static UpdateToDo = async(req: Request, res: Response)=>{
        const userRepository = getRepository(Users);
        const taskRepository = getRepository(Tasks);

        const user = await userRepository.findOne({id:req.body.userId});
        const task = await taskRepository.findOne({id:req.body.taskId});
        if(user){
            res.json("not found user")
            return
        }
        if(task){
            res.json("not found task")
            return
        }
        if(task.user===user){
            res.json("not task of this user")
            return
        }
        if(task.taskStatus==="COMPLETE"){
            res.json("this task is COMPLETE")
            return
        }

        const dateFormat = "YYYY-MM-DD HH:mm:ss"

        await taskRepository.createQueryBuilder()
            .update(Tasks)
            .set({
                expireDate: req.body.expireDate,
                updatedTime: moment(new Date()).format(dateFormat),
                taskName: req.body.taskName,
                taskDescription: req.body.taskDescription
            })
            .where("id = :id",{id:req.body.taskId})
            .execute();

        res.json(await taskRepository.findOne({id: req.body.taskId}))
    }

    static getAllTasks = async (req: Request, res: Response) => {
        res.json(await getRepository(Tasks).find())
    }

    static getTaskById = async (req: Request, res: Response) => {
        const taskRepository = getRepository(Tasks)
        const task = await taskRepository.findOne({ id: req.params.id });
        if (task) {
            res.json(task)
            return
        }
        res.json("No found task")
    }
}