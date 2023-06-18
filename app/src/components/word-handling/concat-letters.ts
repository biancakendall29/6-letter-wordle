import { IGuess } from "./types";

export const concatenateLetters = (
  start: number,
  end: number,
  arr: IGuess[]
) => {
  const selectedGuesses = arr.slice(start, end);
  const concatenatedString = selectedGuesses
    .map((entry) => entry.value)
    .join("");
  return concatenatedString;
};
