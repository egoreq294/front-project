import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/errorMiddleware";

import { router } from "./router";

dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["https://egoreq.netlify.app", "http://localhost:3000"],
    credentials: true,
  })
);
app.use("/api", router);
app.use(errorMiddleware);

const start = async () => {
  try {
    if (!process.env.DB_URL) {
      return;
    }

    await mongoose.connect(process.env.DB_URL, { dbName: "project" });
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
  } catch (e) {
    console.error(e);
  }
};

start();
