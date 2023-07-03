import {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  BackCard,
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

interface IBoard {
  selectedLetter: string;
  currentBlock: number;
  setEnableInput: Dispatch<SetStateAction<boolean>>;
  enterClicked: boolean;
  setEnterClicked: Dispatch<SetStateAction<boolean>>;
}

export const Board: FC<IBoard> = ({
  selectedLetter,
  currentBlock,
  setEnableInput,
  enterClicked,
  setEnterClicked,
}) => {
  // ---------- States -----------
  const [inputs, setInputs] = useState(InitialInputs());
  const [blockColours, setBlockColours] = useState(InitialInputs());
  const [blocks, setBlocks] = useState<JSX.Element[]>(() =>
    inputs.map((entry) => (
      <FrontCard id={`${entry.id}`} key={`front-${entry.id}`}>
        {entry.value}
      </FrontCard>
    ))
  );
  const [backBlocks, setBackBlocks] = useState<JSX.Element[]>(() =>
    blockColours.map((entry) => (
      <BackCard id={`${entry.id}`} key={`back-${entry.id}`}>
        {entry.value}
      </BackCard>
    ))
  );
  const [tileColours, setTileColours] = useState<TileColours[]>([]);
  const [guessNumber, setGuessNumber] = useState(0);
  const [alertNonExistingWord, setAlertNonExistingWord] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);

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
      setGuessNumber(currentBlock);
      enterGuess(concatenateLetters(currentBlock - 6, currentBlock, inputs));
    }
  }, [currentBlock, inputs, enterClicked]);

  useEffect(() => {
    const updatedBlocks = inputs.map((entry, index) => (
      <FrontCard
        id={`${entry.id}`}
        key={`front-${entry.id}`}
        background={entry.colour}
        row={Math.ceil(entry.id / 6)}
        column={entry.id % 6 === 0 ? 6 : entry.id % 6}
      >
        {entry.value}
      </FrontCard>
    ));
    setBlocks(updatedBlocks);
  }, [inputs]);

  useEffect(() => {
    const updatedBlocks = blockColours.map((entry, i) => (
      <BackCard
        id={`${entry.id}`}
        key={`back-${entry.id}`}
        background={entry.colour}
        row={Math.ceil(entry.id / 6)}
        column={entry.id % 6 === 0 ? 6 : entry.id % 6}
        flipped={entry.flipped}
      >
        {
          blocks.find((_, index) => {
            return index === i;
          })?.props.children
        }
      </BackCard>
    ));
    setBackBlocks(updatedBlocks);
  }, [tileColours, blockColours, blocks]);

  useEffect(() => {
    let j = 0;
    for (let i = 5; i >= 0; i--) {
      flipTile(tileColours[j], guessNumber - i);
      j++;
    }
  }, [tileColours, guessNumber]);

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

  // ---------- Functions -----------
  const flipTile = (tileColour: TileColours, guessIndex: number) => {
    const updatedBlocks = blockColours.map((block) => {
      if (block.id === guessIndex) {
        block.colour = tileColour;
        block.flipped = "true";
      }
      return block;
    });
    setBlockColours(updatedBlocks);
    return;
  };

  const enterGuess = async (guess: string) => {
    let correct = await checkWord(guess);
    if (correct) {
      const [tiles, winningWord] = checkForMatch(guess);
      if (winningWord) {
        setTimeout(() => {
          setGameWon(true);
          setEnableInput(false);
        }, 500);
      } else if (!winningWord && guessNumber >= 35) {
        setGameLost(true);
      }
      setTileColours(tiles);
      setEnableInput(true);
    } else {
      setAlertNonExistingWord(true);
      setEnableInput(false);
    }
    setEnterClicked(false);
  };

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
      {gameWon && <WinMenu />}
      {gameLost && <LoseMenu />}
    </>
  );
};
