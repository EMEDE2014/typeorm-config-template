import { AppDataSource } from "../../configs/data-source";
import { Subject } from "../../entities/Subject";
export const subRepository = AppDataSource.getRepository(Subject);
