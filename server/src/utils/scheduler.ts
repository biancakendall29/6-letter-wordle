import cron from "node-cron";
import client from "./caching";
const Word = require("../models/wordModel");

export const runCronJob = async () => {
  try {
    const allWords = await Word.find({ used: "false" });

    const randomWord = allWords[Math.floor(Math.random() * allWords.length)];

    const word = await Word.findByIdAndUpdate(
      randomWord.id,
      { used: true },
      {
        new: true,
      }
    );

    if (!word) {
      return new Error("No word found with that ID");
    }

    const key: string = "word-today";
    await client.set(key, randomWord.name);
  } catch (error) {
    console.error("Error selecting random word:", error);
  }
};

// Schedule the job to run at midnight every day
cron.schedule("23 14 * * *", runCronJob);
