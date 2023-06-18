import { NextFunction, Request, Response } from "express";
import Word from "../models/wordModel";

export const getWordList = async (req: Request, res: Response) => {
  const words = await Word.find();

  res.status(200).json({
    status: "success",
    data: { words },
  });
};

export const getUsedWordList = async (req: Request, res: Response) => {
  const words = await Word.find({ used: true });

  res.status(200).json({
    status: "success",
    data: { words },
  });
};

export const createWord = async (req: Request, res: Response) => {
  const newWord = await Word.create(req.body);

  res.status(200).json({
    status: "success",
    data: { word: newWord },
  });
};

export const updateWord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const word = await Word.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!word) {
    return next(new Error("No tour found with that ID"));
  }

  res.status(200).json({
    status: "success",
    data: { word },
  });
};
