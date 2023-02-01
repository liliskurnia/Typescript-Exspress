import BaseRoutes from "./BaseRouter";
import { auth } from "../middlewares/AuthMiddleware";

//controller
import UserController from "../controllers/UserController";
import validate from "../middlewares/UserValidator";

class UserRoutes extends BaseRoutes{
    public routes(): void {
        this.router.get("/", auth, UserController.index);
        this.router.post("/", auth, validate, UserController.create);
        this.router.get("/:id", auth, UserController.show);
        this.router.put("/:id", auth, validate, UserController.update);
        this.router.delete("/:id", auth, UserController.delete);
    }
}

export default new UserRoutes().router;