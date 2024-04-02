import { Request, Response } from "express";
// import { grpcLogClient, grpcExerciseClient } from "../grpc/client";
import axios from "axios";
import { convertDates, validDates } from "../helpers";
import { insert, ifExistGet } from "../model/redis";
import { serverIDs } from "../constants/config";

export const getUserReportData = async (req: Request, res: Response) => {
  try {
    console.log("GET USER REPORT DATA API CALLED");
    const { uid, start, end } = req.body;
    const [startDate, endDate] = convertDates(start, end);
    if (!validDates(startDate, endDate)) {
      return res.status(400).send({ error: "Invalid dates" });
    }

    try {
      const key = `journal-${uid}-${start}-${end}`;
      const redisCall = await ifExistGet(key);
      if (redisCall) {
        console.log("RESPONSE FROM REDIS");
        return res.status(200).send(redisCall);
      } else {
        throw new Error("Either no data in redis or error with redis");
      }
    } catch (e) {
      const { LOG_SERVER_ID } = serverIDs;
      const { data } = await axios.post(
        `http://${LOG_SERVER_ID}/logs/get-user-log-data`,
        { uid, start, end }
      );
      const key = `journal-${uid}-${start}-${end}`;
      insert(key, JSON.stringify(data));
      return res.status(200).send(data);
      // console.log("Trying to get REPORT data from gRPC");
      // grpcLogClient.getReport(
      //   { uid: String(uid), start: String(startDate), end: String(endDate) },
      //   (err, response) => {
      //     if (err) {
      //       console.error(err);
      //       return;
      //     }
      //     const key = `journal-${uid}-${start}-${end}`;
      //     insert(key, JSON.stringify(response));
      //     return res.status(200).send(response);
      //   }
      // );
    }
  } catch (e) {
    console.log("Error with adding daily log", e);
    res.status(400).send({ error: "Error with adding daily log" });
  }
};

export const getWorkoutHistoricData = async (req: Request, res: Response) => {
  try {
    const { uid, start, end } = req.body;
    const [startDate, endDate] = convertDates(start, end);
    if (!validDates(startDate, endDate)) {
      console.log(startDate, endDate);
      return res.status(400).send({ error: "Invalid dates" });
    }

    try {
      const key = `workout-${uid}-${start}-${end}`;
      const redisCall = await ifExistGet(key);
      if (redisCall) {
        console.log("RESPONSE FROM REDIS");
        return res.status(200).send(redisCall);
      } else {
        throw new Error("Either no data in redis or error with redis");
      }
    } catch (e) {
      const { EXERCISE_SERVER_ID } = serverIDs;
      const { data } = await axios.post(
        `http://${EXERCISE_SERVER_ID}/exercise/get-historic-workout-data`,
        { uid, start, end }
      );
      const key = `workout-${uid}-${start}-${end}`;
      insert(key, JSON.stringify(data));
      return res.status(200).send(data);
      // console.log("Trying to get REPORT data from gRPC");
      // grpcExerciseClient.getWorkoutData(
      //   { uid, start: String(startDate), end: String(endDate) },
      //   (err, response) => {
      //     if (err) {
      //       console.error(err);
      //       return;
      //     }
      //     const workoutData = response;
      //     const key = `workout-${uid}-${start}-${end}`;
      //     insert(key, JSON.stringify(response));
      //     return res.status(200).send(workoutData);
      //   }
      // );
    }
  } catch (e: unknown) {
    console.error(e);
    if (e instanceof Error) res.status(400).send({ error: e.message });
    else res.status(400).send({ error: "Error with getting historic data" });
  }
};
