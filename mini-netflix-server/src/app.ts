import express from "express";
import routes from "./server/routes/routes";
import cors from "cors";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
    this.cors();
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private routes(): void {
    this.express.use(routes);
  }

  private cors(): void {
    const corsOptions = {
      origin: "http://localhost:3333/",
      optionSuccessStatus: 200
    };
    this.express.use(cors(corsOptions));
  }
}

export default new App().express;
