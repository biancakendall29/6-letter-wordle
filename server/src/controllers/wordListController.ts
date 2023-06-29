import { Request, Response } from "express";
const Word = require("../models/wordModel");

const chooseWord = async (wordList: any[]) => {
  let arrIndex = Math.floor(Math.random() * (wordList.length - 0) + 0);
  const chosenWord = wordList[arrIndex];
  const word = await Word.findByIdAndUpdate(
    chosenWord.id,
    { used: true },
    {
      new: true,
    }
  );

  if (!word) {
    return new Error("No word found with that ID");
  }
  return word;
};

module.exports.getRandomWord = async (req: Request, res: Response) => {
  const words = await Word.find({ used: false });
  const chosenWord = await chooseWord(words);

  res.status(200).json({
    status: "success",
    data: { word: chosenWord.name },
  });
};

module.exports.getWordList = async (req: Request, res: Response) => {
  const words = await Word.find();

  res.status(200).json({
    status: "success",
    data: { words },
  });
};

module.exports.getUsedWordList = async (req: Request, res: Response) => {
  const words = await Word.find({ used: true });

  res.status(200).json({
    status: "success",
    data: { words },
  });
};

module.exports.createWord = async (req: Request, res: Response) => {
  const newWord = await Word.create(req.body);

  res.status(200).json({
    status: "success",
    data: { word: newWord },
  });
};

module.exports.updateWord = async (req: Request, res: Response) => {
  const word = await Word.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!word) {
    return new Error("No word found with that ID");
  }

  res.status(200).json({
    status: "success",
    data: { word },
  });
};
