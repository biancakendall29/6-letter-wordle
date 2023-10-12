import { TileColours } from "../word-handling/types";

export const InitialInputs = () => {
  const initialArray = [];
  for (let i = 1; i <= 36; i++) {
    initialArray.push({
      id: i,
      value: "",
      colour: TileColours.CLEAR,
    });
  }
  return initialArray;
};
