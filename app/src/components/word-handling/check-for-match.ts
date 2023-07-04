import { TileColours } from "./types";

export const checkForMatch = (
  guess: string,
  todaysWord: string
): [TileColours[], boolean] => {
  const tileColours = new Array(6);
  console.log(todaysWord);

  // handle duplicate letters
  for (let i = 0; i < 6; i++) {
    if (guess[i] === todaysWord[i]) {
      tileColours[i] = TileColours.GREEN;
    } else if (todaysWord.includes(guess[i])) {
      tileColours[i] = TileColours.ORANGE;
    } else {
      tileColours[i] = TileColours.CLEAR;
    }
  }

  if (guess === todaysWord) {
    return [tileColours, true];
  }

  return [tileColours, false];
};
