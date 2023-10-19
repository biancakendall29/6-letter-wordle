import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { runCronJob } from "./utils/scheduler";
import cron from "node-cron";
const wordRouter = require("../src/routes/wordRoutes");
const todaysWordRouter = require("../src/routes/todaysWordRoutes");

const app = express();
const port = process.env.PORT || "8000";

app.use(cors());
app.use("/", wordRouter);
app.use("/word-today", todaysWordRouter);

dotenv.config({ path: "../.env" });
const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

// Schedule the job to run at midnight every day
cron.schedule("0 0 * * *", runCronJob);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
