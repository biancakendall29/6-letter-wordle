import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import {
  BackspaceSquare,
  EnterSquare,
  KeyboardContainer,
  KeyboardRow1,
  KeyboardRow2,
  KeyboardRow3,
  KeyboardSquare,
} from "./styled-components";

interface IKeyboard {
  setSelectedLetter: Dispatch<SetStateAction<string>>;
  selectedLetter: string;
  setCurrentBlock: Dispatch<SetStateAction<number>>;
  currentBlock: number;
  enableInput: boolean;
  setEnableInput: Dispatch<SetStateAction<boolean>>;
  setEnterClicked: Dispatch<SetStateAction<boolean>>;
  incorrectWord: boolean;
  setIncorrectWord: Dispatch<SetStateAction<boolean>>;
}

export const Keyboard: FC<IKeyboard> = ({
  setSelectedLetter,
  selectedLetter,
  setCurrentBlock,
  currentBlock,
  enableInput,
  setEnableInput,
  setEnterClicked,
  incorrectWord,
  setIncorrectWord,
}) => {
  const keyboardKeys = require("../../payloads/keyboard-keys.json");
  const [backspaceCount, setBackspaceCount] = useState(0);
  const [isStartOfGuess, setIsStartOfGuess] = useState(true);

  const handleClick = async (e: any) => {
    if (backspaceCount < 1) {
      setCurrentBlock(currentBlock + 1);
    }
    setBackspaceCount(0);
    setIsStartOfGuess(false);
    setSelectedLetter(e.target.value);
  };

  useEffect(() => {
    if (backspaceCount > 1) {
      setCurrentBlock(currentBlock - 1);
    }
  }, [backspaceCount]);

  const handleBackspace = async () => {
    setSelectedLetter("");
    setBackspaceCount(backspaceCount + 1);
    setEnableInput(true);
    setIncorrectWord(false);
  };

  const handleEnter = async () => {
    setEnterClicked(true);
    setIsStartOfGuess(true);
    setBackspaceCount(0);
  };

  useEffect(() => {
    if (incorrectWord) {
      setIsStartOfGuess(false);
    }
  }, [incorrectWord]);

  useEffect(() => {
    if (currentBlock % 6 === 0 && currentBlock !== 0 && backspaceCount < 1) {
      setEnableInput(false);
    }
    if (currentBlock < 1 || (currentBlock <= 1 && backspaceCount > 1)) {
      setIsStartOfGuess(true);
    }
  }, [backspaceCount, currentBlock, setEnableInput]);

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
          disabled={
            (currentBlock % 6 === 1 &&
              selectedLetter === "" &&
              !incorrectWord) ||
            isStartOfGuess
          }
        >
          <img alt="Backspace" src="/img/backspace_icon.png" width="130%" />
        </BackspaceSquare>
      );
      keyboard[2].unshift(
        <EnterSquare
          id="enter"
          value={"Enter"}
          key="square-enter"
          onClick={handleEnter}
          disabled={currentBlock % 6 !== 0 || isStartOfGuess}
        >
          <img alt="Backspace" src="/img/enter_icon.png" width="130%" />
        </EnterSquare>
      );
    }
  }

  return (
    <>
      <KeyboardContainer>
        <KeyboardRow1>{keyboard[0]}</KeyboardRow1>
        <KeyboardRow2>{keyboard[1]}</KeyboardRow2>
        <KeyboardRow3>{keyboard[2]}</KeyboardRow3>
      </KeyboardContainer>
    </>
  );
};
