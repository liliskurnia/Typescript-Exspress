import express, {Application, Request, Response} from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import UserRoutes from "./routers/UserRoutes";

class App {
    public app: Application;

    constructor(){
        this.app = express();
        this.plugins();
        this.routes();
        
    }

    protected plugins(): void {
        this.app.use(bodyParser.json());
        this.app.use(morgan("dev"));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }

    protected routes(): void {
        this.app.route("/").get((req : Request, res : Response) => {
            res.send("ini adalah route menggunakan typescript");
        });

        this.app.use("/api/v1/users", UserRoutes);
    }
}

const port: number = 8000;
const app = new App().app;
app.listen(port, () => {
    console.log("Aplikasi ini berjalan di port" + port);
});


// const app = express();
// app.route("/").get((req, res) => {
//     res.send("halo, ini router pertama saya");
// });

// app.listen(8000);