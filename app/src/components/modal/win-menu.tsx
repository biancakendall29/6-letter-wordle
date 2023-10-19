import { FC, useState } from "react";
import { Modal } from ".";
import * as Styled from "./styled-components";
import { handleShare } from "../share-score";
import { TileColours } from "../word-handling/types";

interface IWinMenu {
  day: number;
  score: number;
  todaysWord: string;
  blocks: TileColours[];
}

export const WinMenu: FC<IWinMenu> = ({ day, score, todaysWord, blocks }) => {
  const [isMenuShown, setIsMenuShown] = useState(true);

  const handleCloseMenu = () => {
    setIsMenuShown(false);
  };

  const menuModalContent = (
    <Styled.Container>
      <Styled.SubheadingText>
        Congratulations 🎉 You got {`day ${day}'s`} word 😁
      </Styled.SubheadingText>
      <Styled.HeadingText>{todaysWord}</Styled.HeadingText>
      <Styled.Score>{`${score} / 6`}</Styled.Score>
      <Styled.Button onClick={() => handleShare(blocks, score, day)}>
        Share
      </Styled.Button>
    </Styled.Container>
  );

  return (
    <>
      <Modal
        isShown={isMenuShown}
        hide={handleCloseMenu}
        modalContent={menuModalContent}
      />
    </>
  );
};
