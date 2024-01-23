import { Router } from "express";

import dashboard from "./dashboard";

const router = Router();

export default (): Router => {
  dashboard(router);
  return router;
};
