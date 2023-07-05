import { Request, Response } from "express";
const Word = require("../models/wordModel");

// module.exports.getRandomWord = async (req: Request, res: Response) => {
//   try {
//     // const word = await client.get("word-today");
//     // console.log(word);

//     res.status(200).json({
//       status: "success",
//       data: { word: word },
//     });
//   } catch (error) {
//     console.error("Error retrieving random word:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

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
