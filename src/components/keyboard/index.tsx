import { Dispatch, FC, SetStateAction } from "react";
import {
  BackspaceSquare,
  KeyboardRow1,
  KeyboardRow2,
  KeyboardRow3,
  KeyboardSquare,
} from "./styled-components";

interface IKeyboard {
  setSelectedLetter: Dispatch<SetStateAction<string>>;
  setCurrentBlock: Dispatch<SetStateAction<number>>;
  currentBlock: number;
  enableInput: boolean;
}

export const Keyboard: FC<IKeyboard> = ({
  setSelectedLetter,
  setCurrentBlock,
  currentBlock,
  enableInput,
}) => {
  const keyboardKeys = require("../../payloads/keyboard-keys.json");

  const handleClick = async (e: any) => {
    setSelectedLetter(e.target.value);
    setCurrentBlock(currentBlock + 1);
  };

  const handleBackspace = async (e: any) => {
    console.log("BACK");
  };

  const generateKey = (values: string[]) => {
    const arr = [];
    for (let i = 0; i < values.length; i++) {
      arr.push(
        <KeyboardSquare
          id={`square-${values[i]}`}
          key={`square-${values[i]}`}
          value={values[i]}
          onClick={handleClick}
          disabled={!enableInput}
        >
          {values[i]}
        </KeyboardSquare>
      );
    }
    return arr;
  };

  const keyboard = [];
  for (let i = 0; i < 3; i++) {
    keyboard.push(generateKey(keyboardKeys[i]));
    if (i === 2) {
      keyboard[i].push(
        <BackspaceSquare
          id="backspace"
          value={"Back"}
          key="square-backspace"
          onClick={handleBackspace}
        >
          Back
        </BackspaceSquare>
      );
    }
  }

  return (
    <>
      <KeyboardRow1>{keyboard[0]}</KeyboardRow1>
      <KeyboardRow2>{keyboard[1]}</KeyboardRow2>
      <KeyboardRow3>{keyboard[2]}</KeyboardRow3>
    </>
  );
};
