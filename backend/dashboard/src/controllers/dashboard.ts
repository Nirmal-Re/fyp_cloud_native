import { Request, Response } from "express";
import grpcClient from "../grpc/client";

import { ReportResponse } from "../proto/logsPackage/ReportResponse";

export const getUserReportData = async (req: Request, res: Response) => {
  try {
    const { uid } = req.body;
    // const stats = await getHabitStats(uid);
    grpcClient.getReport({ uid, start: 1, end: 2 }, (err, response) => {
      if (err) {
        console.error(err);
        return;
      }
      const { report } = response as ReportResponse;
      return res.status(200).send(report);
    });
  } catch (e) {
    console.log("Error with adding daily log", e);
    res.status(400).send({ error: "Error with adding daily log" });
  }
};
