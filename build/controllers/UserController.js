"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../services/UserService"));
const Authentication_1 = __importDefault(require("../utils/Authentication"));
const db = require("../db/models");
class UserController {
    constructor() {
        //find all
        this.index = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const service = new UserService_1.default(req);
            const users = yield service.getAll();
            return res.send({
                data: users,
                message: ""
            });
        });
        //create new data
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let { username, password } = req.body;
            const hashedPassword = yield Authentication_1.default.passwordHash(password);
            yield db.user.create({ username, password: hashedPassword });
            // return res.send(createdUser);
            return res.send("user create");
        });
        //find by id
        this.show = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const service = new UserService_1.default(req);
            const users = yield service.getOne();
            return res.send({
                data: users,
                message: ""
            });
        });
        //update data
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const service = new UserService_1.default(req);
            const users = yield service.update();
            return res.send({
                data: users,
                message: "user updated"
            });
        });
        //delete data 
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const service = new UserService_1.default(req);
            const users = yield service.delete();
            return res.send({
                data: users,
                message: "user deleted"
            });
        });
    }
}
exports.default = new UserController;
