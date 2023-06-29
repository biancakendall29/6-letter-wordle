import { TileColours } from "./types";

const todaysWord = "ROUTES";

// const todaysWord = getTodaysWord();
export const checkForMatch = (guess: string) => {
  const tileColours = new Array(6);
  // handle duplicate letters
  for (let i = 0; i < 6; i++) {
    console.log(guess[i]);

    if (guess[i] === todaysWord[i]) {
      tileColours[i] = TileColours.GREEN;
    } else if (todaysWord.includes(guess[i])) {
      tileColours[i] = TileColours.ORANGE;
    } else {
      tileColours[i] = TileColours.CLEAR;
    }
  }
  //   console.log("check for match", tileColours);

  return tileColours;
};
