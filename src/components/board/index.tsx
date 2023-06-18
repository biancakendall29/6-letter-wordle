import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { BlankSquare, BoardGrid } from "./styled-components";
import { checkWord, concatenateValues } from "./check-word";

interface IBoard {
  selectedLetter: string;
  currentBlock: number;
  setEnableInput: Dispatch<SetStateAction<boolean>>;
}

export const Board: FC<IBoard> = ({
  selectedLetter,
  currentBlock,
  setEnableInput,
}) => {
  const [guesses, setGuesses] = useState(() => {
    const initialArray = [];
    for (let i = 1; i <= 36; i++) {
      initialArray.push({ id: i, value: "" });
    }
    return initialArray;
  });
  useEffect(() => {
    setGuesses((prevGuesses) =>
      prevGuesses.map((entry) =>
        entry.id === currentBlock ? { ...entry, value: selectedLetter } : entry
      )
    );
  }, [selectedLetter, currentBlock, setEnableInput]);

  useEffect(() => {
    if (currentBlock % 6 === 0) {
      setEnableInput(false);
      enterGuess(concatenateValues(currentBlock - 6, currentBlock, guesses));
    }
  }, [guesses, setEnableInput]);

  useEffect(() => {
    const updatedBlocks = guesses.map((entry) => (
      <BlankSquare id={`${entry.id}`} key={entry.id}>
        {entry.value}
      </BlankSquare>
    ));
    setBlocks(updatedBlocks);
  }, [guesses]);

  const [blocks, setBlocks] = useState<JSX.Element[]>(() =>
    guesses.map((entry) => (
      <BlankSquare id={`${entry.id}`} key={entry.id}>
        {entry.value}
      </BlankSquare>
    ))
  );

  const enterGuess = async (guess: string) => {
    let correct = await checkWord(guess);
    console.log(correct);
    if (correct) {
      console.log("CORRECT");
      // Flip tiles
    }
    setTimeout(() => {
      setEnableInput(true);
    }, 2000);
  };

  return (
    <>
      <BoardGrid>{blocks}</BoardGrid>
    </>
  );
};
