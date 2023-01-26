import BaseRoutes from "./BaseRouter";
import validate from "../middlewares/AuthValidator";

//controller
import AuthController from "../controllers/AuthController";

class AuthRoutes extends BaseRoutes{
    public routes(): void {
        this.router.post("/register", validate, AuthController.register);
        this.router.post("/login", validate, AuthController.login);
    }
}

export default new AuthRoutes().router;