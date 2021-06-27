import {Connection, getConnection, getRepository} from "typeorm";
import {Request, Response} from "express";
import {Users} from "../entity/Users";

export class UserController{
    static CreateUser = async(req:Request , res:Response)=>{
        const userRepository = getRepository(Users)

        console.log(req.body);

        const user = await userRepository.findOne({username : req.body.username})

        if(user){
            res.json('username is exist')
        }
        else{
            const _user = new Users()
            _user.username = req.body.username
            _user.pwd =  req.body.pwd
            userRepository.insert(_user);
            res.json(_user)
        }
        
    }
    static FindAllUser = async(req:Request , res:Response)=>{
        res.json(await getRepository(Users).find()) 
    }
}