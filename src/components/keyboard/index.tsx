import { Dispatch, FC, SetStateAction } from "react";
import { KeyboardGrid, KeyboardSquare } from "./styled-components";

interface IKeyboard {
  setSelectedLetter: Dispatch<SetStateAction<string>>;
  setCurrentBlock: Dispatch<SetStateAction<number>>;
  currentBlock: number;
}

export const Keyboard: FC<IKeyboard> = ({
  setSelectedLetter,
  setCurrentBlock,
  currentBlock,
}) => {
  const handleClick = async (e: any) => {
    setSelectedLetter(e.target.value);
    setCurrentBlock(currentBlock + 1);
  };

  const arr = new Array(26);
  for (let i = 0; i < 26; i++) {
    arr.push(
      <KeyboardSquare
        id={`${i}-square`}
        key={`${i}-square`}
        value={String.fromCharCode(65 + i)}
        onClick={handleClick}
      >
        {String.fromCharCode(65 + i)}
      </KeyboardSquare>
    );
  }

  return (
    <>
      <KeyboardGrid>{arr}</KeyboardGrid>
    </>
  );
};
