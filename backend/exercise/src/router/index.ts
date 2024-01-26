import { Router } from "express";

import exercise from "./exercise";

const router = Router();

export default (): Router => {
  exercise(router);
  return router;
};
