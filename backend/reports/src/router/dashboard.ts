import { Router } from "express";

import { getUserReportData } from "../controllers/dashboard";
import { isAuthenticated } from "../middlewares";

export default (router: Router) => {
  router.get("/get-user-report-data", isAuthenticated, getUserReportData);
};
