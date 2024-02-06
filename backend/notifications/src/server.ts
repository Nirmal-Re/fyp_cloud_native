import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import "./model/mongoDB";
import router from "./router";
import "./cron_job/notification";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:4001",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/", router());

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/");
});

//    "dev": "concurrently \"tsc -w\" \"nodemon dist/server.js\""
