import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import {
  FrontCard,
  BoardContainer,
  BoardGrid,
  BoardWrapper,
} from "./styled-components";
import { concatenateLetters } from "../word-handling/concat-letters";
import { checkWord } from "../word-handling/check-word";
import { checkForMatch } from "../word-handling/check-for-match";
import { TileColours } from "../word-handling/types";
import { Alert } from "../alert";
import { AlertTypes } from "../alert/types";
import { LoseMenu } from "../modal/lose-menu";
import { WinMenu } from "../modal/win-menu";
import { InitialInputs } from "./constants";
import axios from "axios";
import { TileInput } from "./types";

interface IBoard {
  selectedLetter: string;
  currentBlock: number;
  setEnableInput: Dispatch<SetStateAction<boolean>>;
  enterClicked: boolean;
  setEnterClicked: Dispatch<SetStateAction<boolean>>;
  day: number;
  incorrectWord: boolean;
  setIncorrectWord: Dispatch<SetStateAction<boolean>>;
}

export const Board: FC<IBoard> = ({
  selectedLetter,
  currentBlock,
  setEnableInput,
  enterClicked,
  setEnterClicked,
  day,
  incorrectWord,
  setIncorrectWord,
}) => {
  // ---------- States -----------
  const [inputs, setInputs] = useState<TileInput[]>(InitialInputs());
  const [blockColours, setBlockColours] = useState<TileColours[]>(
    new Array(36).fill(TileColours.CLEAR)
  );
  const [blocks, setBlocks] = useState<JSX.Element[]>(() =>
    inputs.map((entry) => (
      <FrontCard id={`${entry.id}`} key={`front-${entry.id}`}>
        {entry.value}
      </FrontCard>
    ))
  );
  const [guessNumber, setGuessNumber] = useState(0);
  const [alertNonExistingWord, setAlertNonExistingWord] = useState(false);
  const [score, setScore] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [randomWord, setRandomWord] = useState("SPOONS");

  // ---------- UseEffects -----------
  useEffect(() => {
    setInputs((prevInputs) =>
      prevInputs.map((entry) =>
        entry.id === currentBlock ? { ...entry, value: selectedLetter } : entry
      )
    );
  }, [selectedLetter, currentBlock]);

  useEffect(() => {
    if (enterClicked) {
      enterGuess(concatenateLetters(currentBlock - 6, currentBlock, inputs));
    }
  }, [currentBlock, inputs, enterClicked]);

  useEffect(() => {
    const updatedBlocks = inputs.map((entry) => {
      const match = blockColours[entry.id - 1];

      return (
        <FrontCard
          id={`${entry.id}`}
          key={`front-${entry.id}-${match}`}
          background={match && match}
          row={Math.ceil(entry.id / 6)}
          column={entry.id % 6 === 0 ? 6 : entry.id % 6}
        >
          {entry.value}
        </FrontCard>
      );
    });
    setBlocks(updatedBlocks);
  }, [inputs, blockColours]);

  useEffect(() => {
    if (incorrectWord) {
      setAlertNonExistingWord(true);
      setTimeout(() => {
        setAlertNonExistingWord(false);
      }, 4000);
    }
  }, [incorrectWord]);

  const enterGuess = async (guess: string) => {
    let correct = await checkWord(guess);

    if (correct) {
      setIncorrectWord(false);
      setGuessNumber(guessNumber + 1);
      const winningWord = checkForMatch(
        randomWord,
        guess,
        guessNumber,
        blockColours,
        setBlockColours
      );
      console.log(guessNumber, winningWord);
      if (winningWord) {
        setScore(guessNumber + 1);
        setTimeout(() => {
          setGameWon(true);
          setEnableInput(false);
        }, 1000);
      } else if (!winningWord && guessNumber >= 5) {
        setTimeout(() => {
          setGameLost(true);
          setEnableInput(false);
        }, 1000);
      }
      setEnableInput(true);
    } else {
      setIncorrectWord(true);
    }
    setEnterClicked(false);
  };

  // useEffect(() => {
  //   const fetchRandomWord = async () => {
  //     try {
  //       let word = "";
  //       const baseUrl = process.env.REACT_APP_SERVER_URL;
  //       try {
  //         const res = await axios.get(`${baseUrl}word-today/`);
  //         console.log(res.data.data.word.name);
  //         word = res.data.data.word.name;
  //       } catch (error) {
  //         console.error(error);
  //       }
  //       setRandomWord(word);
  //     } catch (error) {
  //       console.error("Error fetching random word:", error);
  //     }
  //   };

  //   fetchRandomWord();
  // }, []);

  return (
    <>
      <BoardContainer>
        {alertNonExistingWord && (
          <Alert message="Not in word list !" type={AlertTypes.warning} />
        )}
        <BoardWrapper>
          <BoardGrid>{blocks}</BoardGrid>
        </BoardWrapper>
      </BoardContainer>
      {gameWon && <WinMenu day={day} score={score} todaysWord={randomWord} />}
      {gameLost && <LoseMenu day={day} todaysWord={randomWord} />}
    </>
  );
};
