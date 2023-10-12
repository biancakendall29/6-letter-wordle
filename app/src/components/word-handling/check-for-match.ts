import { Dispatch, SetStateAction } from "react";
import { TileInput } from "../board/types";
import { TileColours } from "./types";
import { concatenateLetters } from "./concat-letters";

export const checkForMatch = (
  todaysWord: string,
  inputs: TileInput[],
  blockColours: TileColours[],
  setBlockColours: Dispatch<SetStateAction<TileColours[]>>,
  guessNumber: number
): boolean => {
  const newBlockColours = blockColours.map((colour, index) => {
    if (index >= guessNumber * 6 && index < (guessNumber + 1) * 6) {
      const i = index % 6;
      const currInput = inputs.find(
        (inp) => inp.id === guessNumber * 6 + i + 1
      );
      if (currInput) {
        return currInput?.value === todaysWord[i]
          ? TileColours.GREEN
          : todaysWord.includes(currInput?.value)
          ? TileColours.ORANGE
          : TileColours.CLEAR;
      }
    }
    return colour;
  });

  setBlockColours(newBlockColours);

  if (
    concatenateLetters(guessNumber * 6, guessNumber * 6 + 6, inputs) ===
    todaysWord
  ) {
    return true;
  }

  return false;
};
