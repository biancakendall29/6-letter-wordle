import axios from "axios";
import { IGuess } from "./types";
import { reqUrl } from "../../constants/merriam-webster";

export const concatenateValues = (
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

export const checkWord = async (word: string) => {
  try {
    let res = await axios.get(
      `${reqUrl}/${word}?key=${process.env.REACT_APP_DICTIONARY_KEY}`
    );
    let resWord = res.data[0].meta.id.split(":")[0];
    let resWordStems = res.data[0].meta.stems;

    if (resWord.length === 6 && resWord === word.toLowerCase()) {
      return true;
    } else if (
      word.toLowerCase().includes(resWord) &&
      resWordStems.includes(word.toLowerCase())
    ) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};
