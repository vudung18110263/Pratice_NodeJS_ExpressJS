import "reflect-metadata";
import {createConnection} from "typeorm";
import {Users} from "./entity/Users";
import * as bodyParser from 'body-parser';
import userRoute from '../src/route/UserRoute';
import taskRoute from "../src/route/taskRoute"
import * as cors from "cors";
import * as express from "express";

createConnection().then(async connection => {
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());

    app.use("/users", userRoute);
    app.use("/tasks",taskRoute);

    app.listen(3000, () => {
        console.log("Server started on port 3000!");
    })


}).catch(error => console.log(error));
