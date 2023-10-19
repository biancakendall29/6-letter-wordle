"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const scheduler_1 = require("./utils/scheduler");
const node_cron_1 = __importDefault(require("node-cron"));
const wordRouter = require("../src/routes/wordRoutes");
const todaysWordRouter = require("../src/routes/todaysWordRoutes");
const app = (0, express_1.default)();
const port = process.env.SERVER_PORT || "8000";
app.use((0, cors_1.default)());
app.use("/", wordRouter);
app.use("/word-today", todaysWordRouter);
dotenv_1.default.config({ path: "../.env" });
const DB = process.env.DATABASE;
mongoose_1.default.connect(DB).then(() => console.log("DB connection successful!"));
// Schedule the job to run at midnight every day
node_cron_1.default.schedule("0 0 * * *", scheduler_1.runCronJob);
app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
//# sourceMappingURL=index.js.map