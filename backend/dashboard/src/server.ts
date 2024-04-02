import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import router from "./router";
import "./model/redis";

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

app.get("/dashboard", (req, res) => {
  res.status(200).send("Hello");
});
app.use("/dashboard", router());
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/");
});
