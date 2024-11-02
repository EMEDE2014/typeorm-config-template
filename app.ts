import express from "express";

class App {
  public express: express.Application;

  constructor() {
    this.express();
    this.middlewares();
    this.routes();
  }

  middlewares() {}

  routes() {}
}

export default new App().express;
