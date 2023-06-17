import { FC, useEffect, useState } from "react";
import { BlankSquare, BoardGrid } from "./styled-components";
import React from "react";

interface IBoard {
  selectedLetter: string;
  currentBlock: number;
}

export const Board: FC<IBoard> = ({ selectedLetter, currentBlock }) => {
  const [guesses, setGuesses] = useState(() => {
    const initialArray = [];
    for (let i = 1; i <= 36; i++) {
      initialArray.push({ id: i, value: "" });
    }
    return initialArray;
  });
  const [blocks, setBlocks] = useState(() => {
    const initialArray2 = [];
    for (let i = 1; i <= 36; i++) {
      initialArray2.push(
        <BlankSquare id={`${i}`} key={i}>
          {
            guesses.find((el) => {
              return el.id === i;
            })?.value
          }
        </BlankSquare>
      );
    }
    return initialArray2;
  });

  const updateEntryValue = (id: number, newValue: string) => {
    setGuesses((prevArray) => {
      return prevArray.map((entry) => {
        if (entry.id === id) {
          return { ...entry, value: newValue };
        }
        return entry;
      });
    });
  };

  useEffect(() => {
    updateEntryValue(currentBlock, selectedLetter);
    console.log(guesses);
  }, [currentBlock, selectedLetter]);

  return (
    <>
      <BoardGrid>{blocks}</BoardGrid>
    </>
  );
};
