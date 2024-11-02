import express from "express";

import { AppDataSource } from "./configs/data-source";

AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  return app.listen(3333, () => console.log("Inicializado com sucesso"));
});
