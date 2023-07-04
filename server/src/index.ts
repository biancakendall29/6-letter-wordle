import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
const wordRouter = require("../src/routes/wordRoutes");
import { runCronJob } from "./utils/scheduler";

const app = express();
const port = process.env.SERVER_PORT || "8000";

app.use(cors());
app.use("/", wordRouter);

dotenv.config({ path: "../.env" });
const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

runCronJob()
  .then(() => {
    console.log("Cron job executed successfully");
  })
  .catch((error) => {
    console.error("Error executing cron job:", error);
  });

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
