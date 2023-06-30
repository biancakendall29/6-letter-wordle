import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  BackBlankSquare,
  BlankSquare,
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
      initialArray.push({ id: i, value: "", colour: TileColours.CLEAR });
    }
    return initialArray;
  });
  const [blockColours, setBlockColours] = useState(() => {
    const initialArray = [];
    for (let i = 1; i <= 36; i++) {
      initialArray.push({ id: i, value: "", colour: TileColours.CLEAR });
    }
    return initialArray;
  });
  const [blocks, setBlocks] = useState<JSX.Element[]>(() =>
    guesses.map((entry) => (
      <BlankSquare id={`${entry.id}`} key={`front-${entry.id}`}>
        {entry.value}
      </BlankSquare>
    ))
  );
  const [backBlocks, setBackBlocks] = useState<JSX.Element[]>(() =>
    guesses.map((entry) => (
      <BlankSquare id={`${entry.id}`} key={`back-${entry.id}`}>
        {entry.value}
      </BlankSquare>
    ))
  );
  const [tileColours, setTileColours] = useState<TileColours[]>([
    TileColours.CLEAR,
    TileColours.CLEAR,
    TileColours.CLEAR,
    TileColours.CLEAR,
    TileColours.CLEAR,
    TileColours.CLEAR,
  ]);
  const [guessNumber, setGuessNumber] = useState(0);
  const [alertNonExistingWord, setAlertNonExistingWord] = useState(false);

  useEffect(() => {
    setGuesses((prevGuesses) =>
      prevGuesses.map((entry) =>
        entry.id === currentBlock ? { ...entry, value: selectedLetter } : entry
      )
    );
  }, [selectedLetter, currentBlock]);

  useEffect(() => {
    if (currentBlock % 6 === 0 && currentBlock !== 0) {
      setGuessNumber(currentBlock);
      enterGuess(concatenateLetters(currentBlock - 6, currentBlock, guesses));
    }
  }, [currentBlock, guesses]);

  useEffect(() => {
    const updatedBlocks = guesses.map((entry) => (
      <BlankSquare
        id={`${entry.id}`}
        key={`front-${entry.id}`}
        background={entry.colour}
        row={Math.ceil(entry.id / 6)}
        column={entry.id % 6 === 0 ? 6 : entry.id % 6}
      >
        {entry.value}
      </BlankSquare>
    ));
    setBlocks(updatedBlocks);
  }, [guesses]);

  useEffect(() => {
    const updatedBlocks = blockColours.map((entry, i) => (
      <BackBlankSquare
        id={`${entry.id}`}
        key={`back-${entry.id}`}
        background={entry.colour}
        row={Math.ceil(entry.id / 6)}
        column={entry.id % 6 === 0 ? 6 : entry.id % 6}
      >
        {
          guesses.find((el) => {
            return el.id === i + 1;
          })?.value
        }
      </BackBlankSquare>
    ));
    setBackBlocks(updatedBlocks);
  }, [tileColours, blockColours]);

  const flipTile = (tileColour: TileColours, guessIndex: number) => {
    const updatedBlocks = blockColours.map((block) => {
      if (block.id === guessIndex) {
        block.colour = tileColour;
      }
      return block;
    });
    setBlockColours(updatedBlocks);
    return;
  };
  console.log(currentBlock);

  useEffect(() => {
    let j = 0;
    for (let i = 5; i >= 0; i--) {
      flipTile(tileColours[j], guessNumber - i);
      j++;
    }
  }, [tileColours, guessNumber]);

  const enterGuess = async (guess: string) => {
    let correct = await checkWord(guess);
    console.log(correct);
    if (correct) {
      setTileColours(checkForMatch(guess));
    } else {
      setAlertNonExistingWord(true);
      setEnableInput(false);
    }
  };

  useEffect(() => {
    if (alertNonExistingWord) {
      setTimeout(() => {
        setAlertNonExistingWord(false);
      }, 3000);
    }
  }, [alertNonExistingWord]);

  const allBlocks = useMemo(() => {
    return backBlocks.concat(blocks);
  }, [backBlocks, blocks]);

  return (
    <>
      <BoardContainer>
        {alertNonExistingWord && (
          <Alert message="Not in word list !" type={AlertTypes.warning} />
        )}
        <BoardWrapper>
          <BoardGrid>{allBlocks}</BoardGrid>
        </BoardWrapper>
      </BoardContainer>
    </>
  );
};
