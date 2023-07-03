import { TileColours } from "./types";

const todaysWord = "ROUTES";

// schedular

// const todaysWord = getTodaysWord();
export const checkForMatch = (guess: string): [TileColours[], boolean] => {
  const tileColours = new Array(6);
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
