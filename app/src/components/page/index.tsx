import { FC, useState } from "react";
import { Board } from "../board";
import { Keyboard } from "../keyboard";
import { PageContainer } from "./styled-components";

export const Page: FC = () => {
  const [selectedLetter, setSelectedLetter] = useState("");
  const [currentBlock, setCurrentBlock] = useState(0);
  const [enableInput, setEnableInput] = useState(true);
  return (
    <>
      <PageContainer>
        <Board
          selectedLetter={selectedLetter}
          currentBlock={currentBlock}
          setEnableInput={setEnableInput}
        />
        <Keyboard
          setSelectedLetter={setSelectedLetter}
          selectedLetter={selectedLetter}
          setCurrentBlock={setCurrentBlock}
          currentBlock={currentBlock}
          enableInput={enableInput}
        />
      </PageContainer>
    </>
  );
};
