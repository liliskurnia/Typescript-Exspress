import { Request, Response } from "express";
import IController from "./ControllerInterface";
import UserService from "../services/UserService";

class UserController implements IController {

    //find all
    index= async (req: Request, res: Response) : Promise<Response> => {
        const service: UserService = new UserService(req);
        const users = await service.getAll();

        return res.send({
            data : users,
            message : ""
        });
    }

    //create new data
    create = async (req: Request, res: Response) : Promise<Response> => {
        const service: UserService = new UserService(req);
        const users = await service.store();

        return res.send({
            data : users,
            message : "user create"
        });
    }

    //find by id
    show = async (req: Request, res: Response) : Promise<Response> => {
        const service: UserService = new UserService(req);
        const users = await service.getOne();
        
        return res.send({
            data : users,
            message : ""
        });
    }

    //update data
    update = async (req: Request, res: Response) : Promise<Response> => {
        const service: UserService = new UserService(req);
        const users = await service.update();

        return res.send({
            data : users,
            message : "user updated"
        });
    }

    //delete data 
    delete = async (req: Request, res: Response) : Promise<Response> => {
        const service: UserService = new UserService(req);
        const users = await service.delete();

        return res.send({
            data : users,
            message : "user deleted"
        });
    }


}

export default new UserController;