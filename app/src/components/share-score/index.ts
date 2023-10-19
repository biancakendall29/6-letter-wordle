import { TileColours } from "../word-handling/types";

export const getScreenshot = (
  blocks: TileColours[],
  score: number,
  day: number
) => {
  const scoreMessage = score < 7 ? score : "X";
  let message = `6-letter Wordle ${day} ${scoreMessage}/6 \n`;
  for (let i = 1; i <= score * 6; i++) {
    switch (blocks[i - 1]) {
      case TileColours.ORANGE:
        message += "🟧 ";
        break;
      case TileColours.GREEN:
        message += "🟩 ";
        break;
      case TileColours.CLEAR:
        message += "⬛️ ";
        break;
      default:
        message += "⬛️ ";
        break;
    }
    if (i % 6 === 0) {
      message.concat("\n");
    }
  }
  return message;
};

export const handleShare = (
  blocks: TileColours[],
  score: number,
  day: number
) => {
  const message = getScreenshot(blocks, score, day);
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");
};
