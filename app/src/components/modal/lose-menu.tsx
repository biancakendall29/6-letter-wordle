import { FC, useState } from "react";
import { Modal } from ".";
import * as Styled from "./styled-components";
import { TileColours } from "../word-handling/types";
import { handleShare } from "../share-score";

interface ILoseMenu {
  day: number;
  todaysWord: string;
  blocks: TileColours[];
}

export const LoseMenu: FC<ILoseMenu> = ({ day, todaysWord, blocks }) => {
  const [isMenuShown, setIsMenuShown] = useState(true);

  const handleCloseMenu = () => {
    setIsMenuShown(false);
  };

  const menuModalContent = (
    <Styled.Container>
      <Styled.SubheadingText>
        Sorry, uou did not get {`day ${day}'s`} word ☹️
      </Styled.SubheadingText>
      <Styled.HeadingText>{todaysWord}</Styled.HeadingText>
      <Styled.Score>{`X / 6`}</Styled.Score>
      <Styled.Button onClick={() => handleShare(blocks, 7, day)}>
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
