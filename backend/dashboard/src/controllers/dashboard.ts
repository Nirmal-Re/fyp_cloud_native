import { Request, Response } from "express";
import grpcClient from "../grpc/client";

export const getUserReportData = async (req: Request, res: Response) => {
  try {
    const { uid } = req.body;
    // const stats = await getHabitStats(uid);
    grpcClient.getReport({ uid, start: 1, end: 2 }, (err, response) => {
      if (err) {
        console.error(err);
        return;
      }
      return res.status(200).send({ response });
    });
  } catch (e) {
    console.log("Error with adding daily log", e);
    res.status(400).send({ error: "Error with adding daily log" });
  }
};
