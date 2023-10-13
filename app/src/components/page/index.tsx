import { FC, useState } from "react";
import { Board } from "../board";
import { Keyboard } from "../keyboard";
import * as Styled from "./styled-components";
import { StartMenu } from "../modal/start-menu";

export const Page: FC = () => {
  const [selectedLetter, setSelectedLetter] = useState("");
  const [currentBlock, setCurrentBlock] = useState(0);
  const [enableInput, setEnableInput] = useState(true);
  const [enterClicked, setEnterClicked] = useState(false);
  const [incorrectWord, setIncorrectWord] = useState(false);

  const initialDate = new Date("2023-07-02");
  const currentDate = new Date();
  const timeDiff = currentDate.getTime() - initialDate.getTime();
  const daysElapsed = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  return (
    <>
      <Styled.PageContainer>
        <StartMenu dayCount={daysElapsed} />
        <Board
          selectedLetter={selectedLetter}
          currentBlock={currentBlock}
          setEnableInput={setEnableInput}
          enterClicked={enterClicked}
          setEnterClicked={setEnterClicked}
          day={daysElapsed}
          incorrectWord={incorrectWord}
          setIncorrectWord={setIncorrectWord}
        />
        <Keyboard
          setSelectedLetter={setSelectedLetter}
          selectedLetter={selectedLetter}
          setCurrentBlock={setCurrentBlock}
          currentBlock={currentBlock}
          setEnableInput={setEnableInput}
          enableInput={enableInput}
          setEnterClicked={setEnterClicked}
          incorrectWord={incorrectWord}
          setIncorrectWord={setIncorrectWord}
        />
      </Styled.PageContainer>
    </>
  );
};
