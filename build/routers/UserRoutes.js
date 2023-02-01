"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./BaseRouter"));
const AuthMiddleware_1 = require("../middlewares/AuthMiddleware");
//controller
const UserController_1 = __importDefault(require("../controllers/UserController"));
const UserValidator_1 = __importDefault(require("../middlewares/UserValidator"));
class UserRoutes extends BaseRouter_1.default {
    routes() {
        this.router.get("/", AuthMiddleware_1.auth, UserController_1.default.index);
        this.router.post("/", AuthMiddleware_1.auth, UserValidator_1.default, UserController_1.default.create);
        this.router.get("/:id", AuthMiddleware_1.auth, UserController_1.default.show);
        this.router.put("/:id", AuthMiddleware_1.auth, UserValidator_1.default, UserController_1.default.update);
        this.router.delete("/:id", AuthMiddleware_1.auth, UserController_1.default.delete);
    }
}
exports.default = new UserRoutes().router;
