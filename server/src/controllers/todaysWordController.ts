import { Request, Response } from "express";
const TodaysWord = require("../models/todaysWordModel");

module.exports.updateTodaysWord = async (req: Request, res: Response) => {
  const word = await TodaysWord.findByIdAndUpdate(req.params.id, req.body, {
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

module.exports.getTodaysWord = async (req: Request, res: Response) => {
  const word = await TodaysWord.findOne();

  res.status(200).json({
    status: "success",
    data: { word },
  });
};
