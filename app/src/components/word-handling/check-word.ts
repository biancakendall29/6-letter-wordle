import axios from "axios";
import { reqUrl } from "../../constants/merriam-webster";

export const checkWord = async (word: string) => {
  try {
    let res = await axios.get(
      `${reqUrl}/${word}?key=${process.env.REACT_APP_DICTIONARY_KEY}`
    );
    let resWord = res.data[0].meta.id.split(":")[0].toLocaleLowerCase();
    let resWordStems = res.data[0].meta.stems.map((el: string) =>
      el.toLocaleLowerCase()
    );

    if (resWord.length === 6 && resWord === word.toLocaleLowerCase()) {
      return true;
    } else if (
      word.toLocaleLowerCase().includes(resWord) &&
      resWordStems.includes(word.toLowerCase())
    ) {
      return true;
    }
    return false;
  } catch (error) {
    // console.log(error);
    return false;
  }
};
