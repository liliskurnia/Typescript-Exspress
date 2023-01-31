import { Request } from "express";
const db = require('../db/models');

class UserService {
    credential: {
        id: number
    };
    body: Request['body'];
    params : Request ['params'];

    constructor (req: Request){
        this.credential = req.app.locals.credential;
        this.body = req.body;
        this.params = req.params;
    }

    //methode menampilkan semua data 
    getAll = async () => {
        const users = await db.user.findAll({
            attributes : [ 'username', 'password']
        });

        return users;
    }

    //methode menyimpan data 
    store = async () => {
        const {username, password} = this.body;

        const users = await db.user.create({
            username, password
        });

        return users;
    }

    //methode find data by id  
    getOne = async () => {
        const {id} = this.params;

        const users = await db.user.findOne({
            where: {id}
        });

        return users;
    }

    //methode update data 
    update = async () => {
        const {id} = this.params;
        const {username, password} = this.body;

        const users = await db.user.update({
            username, password
        }, {
            where: {id}
        });

        return users;
    }

    //methode delete data 
    delete = async () => {
        const {id} = this.params;

        const users = await db.user.destroy({
            where: {id}
        });

        return users;
    }
}

export default UserService;