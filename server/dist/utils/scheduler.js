"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCronJob = void 0;
const Word = require("../models/wordModel");
const TodaysWord = require("../models/todaysWordModel");
const moment = require("moment-timezone");
const runCronJob = async () => {
    let i = 0;
    console.log("CRON RUN ", i);
    try {
        const allWords = await Word.find({ used: "false" });
        const randomWord = allWords[Math.floor(Math.random() * allWords.length)];
        const word = await Word.findByIdAndUpdate(randomWord.id, { used: true }, {
            new: true,
        });
        if (!word) {
            return new Error("No word found with that ID");
        }
        const todaysWord = await TodaysWord.findByIdAndUpdate("64a43ddf48781095b4e612f5", { name: randomWord.name }, {
            new: true,
        });
        console.log(todaysWord);
        if (!todaysWord) {
            return new Error("Todays word not found");
        }
    }
    catch (error) {
        console.error("Error selecting random word:", error);
    }
    i++;
};
exports.runCronJob = runCronJob;
//# sourceMappingURL=scheduler.js.map