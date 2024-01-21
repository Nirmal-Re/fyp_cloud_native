import { Router } from "express";

import report from "./report";

const router = Router();

export default (): Router => {
  report(router);
  return router;
};
