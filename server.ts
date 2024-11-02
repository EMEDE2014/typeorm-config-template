import app from "./app";
import { AppDataSource } from "./src/configs/data-source";

AppDataSource.initialize().then(() => {
  return app.listen(3001, () => {
    console.log("Connectado no bancona porta http://localhost:3001");
  });
});
