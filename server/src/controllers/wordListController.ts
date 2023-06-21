import { NextFunction, Request, Response } from "express";
const Word = require("../models/wordModel");

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

module.exports.updateWord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const word = await Word.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!word) {
    return new Error("No tour found with that ID");
  }

  res.status(200).json({
    status: "success",
    data: { word },
  });
};
