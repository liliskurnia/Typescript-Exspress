import { Request, Response } from "express";
import IController from "./ControllerInterface";
const db = require("../db/models")

class TodoController implements IController {

    index(req: Request, res: Response) : Response {
        return res.send("index");
    }

    create = async (req: Request, res: Response) : Promise<Response> => {
        const {id} = req.app.locals.credential;
        const {description} = req.body;

        const todo = await db.todo.create({
            user_id : id,
            description
        });

        return res.send({
            data : todo,
            message : "todo create"
        });
    }

    show(req: Request, res: Response) : Response {
        return res.send("show");
    }

    update(req: Request, res: Response) : Response {
        return res.send("Name updated");
    }

    delete(req: Request, res: Response) : Response {
        return res.send("delete");
    }

}

export default new TodoController;