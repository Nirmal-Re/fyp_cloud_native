import { Router } from "express";

import {
  getUserReportData,
  getWorkoutHistoricData,
} from "../controllers/dashboard";
import { isAuthenticated } from "../middlewares";

export default (router: Router) => {
  router.get("/get-user-report-data", isAuthenticated, getUserReportData);
  router.post(
    "/get-workout-historic-data",
    isAuthenticated,
    getWorkoutHistoricData
  );
};
