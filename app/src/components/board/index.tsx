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
import axios from "axios";

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
  const [score, setScore] = useState(0);
  const [randomWord, setRandomWord] = useState("");

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
    const updatedBlocks = inputs.map((entry) => (
      <FrontCard
        id={`${entry.id}`}
        key={`front-${entry.id}`}
        background={entry.colour}
        row={Math.ceil(entry.id / 6)}
        column={entry.id % 6 === 0 ? 6 : entry.id % 6}
        flipped={entry.flipped}
      >
        {entry.value}
      </FrontCard>
    ));
    setBlocks(updatedBlocks);
  }, [inputs]);

  console.log(incorrectWord);

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
  }, [tileColours, blockColours, blocks, incorrectWord]);

  useEffect(() => {
    if (!incorrectWord) {
      let j = 0;
      for (let i = 5; i >= 0; i--) {
        flipTile(tileColours[j], guessNumber - i);
        j++;
      }
    }
  }, [tileColours, guessNumber, incorrectWord]);

  useEffect(() => {
    if (incorrectWord) {
      setAlertNonExistingWord(true);
      setTimeout(() => {
        setAlertNonExistingWord(false);
      }, 4000);
    }
  }, [incorrectWord]);

  const allBlocks = useMemo(() => {
    console.log(backBlocks, blocks);

    return backBlocks.concat(blocks);
  }, [backBlocks, blocks]);

  // ---------- Functions -----------
  const flipTile = (tileColour: TileColours, guessIndex: number) => {
    if (!incorrectWord) {
      console.log("set block colours");

      const updatedBlocks = blockColours.map((block) => {
        if (block.id === guessIndex) {
          block.colour = tileColour;
          block.flipped = "true";
        }
        return block;
      });
      setBlockColours(updatedBlocks);

      setInputs((prevInputs) =>
        prevInputs.map((entry) =>
          entry.id === guessIndex ? { ...entry, flipped: "true" } : entry
        )
      );
    }
  };

  const enterGuess = async (guess: string) => {
    let correct = await checkWord(guess);
    console.log("before", backBlocks);

    if (correct) {
      setIncorrectWord(false);
      const [tiles, winningWord] = checkForMatch(guess, randomWord);
      if (winningWord) {
        setTimeout(() => {
          setScore(Math.ceil(guessNumber / 6));
          setGameWon(true);
          setEnableInput(false);
        }, 2500);
      } else if (!winningWord && guessNumber > 35) {
        setTimeout(() => {
          setGameLost(true);
        }, 2500);
      }
      setTileColours(tiles);
      setEnableInput(true);
    } else {
      setIncorrectWord(true);
    }
    setEnterClicked(false);
    console.log("after", backBlocks);
  };

  useEffect(() => {
    const fetchRandomWord = async () => {
      try {
        let word = "";
        const baseUrl = process.env.REACT_APP_SERVER_URL;
        try {
          const res = await axios.get(`${baseUrl}word-today/`);
          console.log(res.data.data.word.name);
          word = res.data.data.word.name;
        } catch (error) {
          console.error(error);
        }
        setRandomWord(word);
      } catch (error) {
        console.error("Error fetching random word:", error);
      }
    };

    fetchRandomWord();
  }, []);

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
      {gameWon && <WinMenu day={day} score={4} todaysWord="" />}
      {gameLost && <LoseMenu day={day} todaysWord="" />}
    </>
  );
};
