import { Router } from "express";
import notification from "./notification";

const router = Router();

export default (): Router => {
  notification(router);
  return router;
};
