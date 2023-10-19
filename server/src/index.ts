import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
// import { runCronJob } from "./utils/scheduler";
// import cron from "node-cron";
import path from "path";
const helmet = require("helmet");
const wordRouter = require("./routes/wordRoutes");
const todaysWordRouter = require("./routes/todaysWordRoutes");

dotenv.config({ path: "../../app/.env" });

const app = express();
const port = process.env.PORT || "8000";
const DB = process.env.DATABASE;

app.use(helmet());

app.use(cors());
app.use("/api", wordRouter);
app.use("/api/word-today", todaysWordRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "app", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "app", "build", "index.html"));
  });
}

const startServer = async () => {
  try {
    await mongoose.connect(DB);
    console.log("DB connection successful!");

    app.listen(port, () => {
      console.log(`Server is listening on ${port}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
};

if (require.main === module) {
  startServer();
}

// Schedule the job to run at midnight every day
// cron.schedule("0 0 * * *", runCronJob);

export default app;
