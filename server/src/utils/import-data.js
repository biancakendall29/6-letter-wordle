const fs = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Word = require("../models/wordModel.ts");

dotenv.config({ path: "../../.env" });

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => console.log("DB connection successful!"));

const wordList = JSON.parse(
  fs.readFileSync(`${__dirname}/word-list.json`, "utf-8")
);

const addBoolToWord = () => {
  const arr = [];
  wordList.map((word) => arr.push({ name: word, used: false }));
  return arr;
};

const importData = async () => {
  const wordListWithBools = addBoolToWord();
  try {
    await Word.create(wordListWithBools);
    console.log("Data successfully loaded!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
}
