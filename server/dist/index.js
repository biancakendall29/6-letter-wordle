"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
// import { runCronJob } from "./utils/scheduler";
// import cron from "node-cron";
const path_1 = __importDefault(require("path"));
const wordRouter = require("./routes/wordRoutes");
const todaysWordRouter = require("./routes/todaysWordRoutes");
dotenv_1.default.config({ path: "../.env" });
const app = (0, express_1.default)();
const port = process.env.PORT || "8000";
const DB = process.env.DATABASE;
app.use((0, cors_1.default)());
app.use("/api", wordRouter);
app.use("/api/word-today", todaysWordRouter);
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static(path_1.default.join(__dirname, "app", "build")));
    app.get("*", (req, res) => {
        res.sendFile(path_1.default.join(__dirname, "app", "build", "index.html"));
    });
}
const startServer = async () => {
    try {
        await mongoose_1.default.connect(DB);
        console.log("DB connection successful!");
        app.listen(port, () => {
            console.log(`Server is listening on ${port}`);
        });
    }
    catch (err) {
        console.error("Failed to start server:", err);
    }
};
if (require.main === module) {
    startServer();
}
// Schedule the job to run at midnight every day
// cron.schedule("0 0 * * *", runCronJob);
exports.default = app;
//# sourceMappingURL=index.js.map