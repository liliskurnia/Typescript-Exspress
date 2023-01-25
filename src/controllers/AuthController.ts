import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";

class AuthController {

    index(req: Request, res: Response) : Response {
        return res.send("");
    }

    create(req: Request, res: Response) : Response {
        return res.send("")
    }

}

export default new AuthController;