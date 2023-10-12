export interface IGuess {
  id: number;
  value: string;
}

export enum TileColours {
  GREEN = "rgba(0, 128, 0, 0.7)",
  ORANGE = "rgba(255, 120, 31, 0.7)",
  CLEAR = "transparent",
}

export type colourCheck = {
  char: string;
  used: boolean;
};
