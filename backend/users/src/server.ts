import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import router from "./router";

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

app.get("/users", (req, res) => {
  res.status(200).send("Hello");
});
app.use("/users/auth", router());
app.use("/users/user", router());

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000/");
});

//    "dev": "concurrently \"tsc -w\" \"nodemon dist/server.js\""
