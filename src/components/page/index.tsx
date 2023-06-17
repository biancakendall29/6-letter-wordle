import { FC, useState } from "react";
import { Board } from "../board";
import { Keyboard } from "../keyboard";
import { PageContainer } from "./styled-components";

export const Page: FC = () => {
  const [selectedLetter, setSelectedLetter] = useState("");
  const [currentBlock, setCurrentBlock] = useState(0);
  return (
    <>
      <PageContainer>
        <Board selectedLetter={selectedLetter} currentBlock={currentBlock} />
        <Keyboard
          setSelectedLetter={setSelectedLetter}
          setCurrentBlock={setCurrentBlock}
          currentBlock={currentBlock}
        />
      </PageContainer>
    </>
  );
};
