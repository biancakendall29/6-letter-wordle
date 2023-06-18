import express from "express";
import wordRouter from "./routes/wordRoutes";

const app = express();
const port = process.env.SERVER_PORT || "8000";

app.use("/", wordRouter);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
