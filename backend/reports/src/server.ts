import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import router from "./router";

const app = express();
app.use(express.json());

app.use(
  cors({
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/report", router());

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/");
});
