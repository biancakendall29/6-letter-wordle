import { Dispatch, SetStateAction } from "react";
import { TileColours, colourCheck } from "./types";

export const checkForMatch = (
  todaysWord: string,
  guess: string,
  guessNumber: number,
  blockColours: TileColours[],
  setBlockColours: Dispatch<SetStateAction<TileColours[]>>
): boolean => {
  const guessArray = guess
    .split("")
    .map((char) => ({ char: char, used: false }));
  const wordArray = todaysWord.split("").map((char) => ({ char, used: false }));

  const newColours = getTileColours(guessArray, wordArray);

  const updatedBlockColours = [
    ...blockColours.slice(0, guessNumber * 6),
    ...newColours,
    ...blockColours.slice((guessNumber + 1) * 6),
  ];

  setBlockColours(updatedBlockColours);

  if (guess === todaysWord) {
    return true;
  }

  return false;
};

const getTileColours = (
  guessArray: colourCheck[],
  wordArray: colourCheck[]
) => {
  const result: TileColours[] = [];

  // Check for green matches
  guessArray.forEach((g, i) => {
    if (g.char === wordArray[i].char) {
      result.push(TileColours.GREEN);
      g.used = true;
      wordArray[i].used = true;
    } else {
      result.push(TileColours.CLEAR);
    }
  });

  // Check for orange matches
  guessArray.forEach((g, i) => {
    if (result[i] !== TileColours.CLEAR) {
      return;
    }

    for (let j = 0; j < wordArray.length; j++) {
      if (g.char === wordArray[j].char && !wordArray[j].used) {
        result[i] = TileColours.ORANGE;
        g.used = true;
        wordArray[j].used = true;
        break;
      }
    }
  });

  return result;
};
