import { FC, useState } from "react";
import { Modal } from ".";
import * as Styled from "./styled-components";

interface IStartMenu {
  dayCount: number;
}

export const StartMenu: FC<IStartMenu> = ({ dayCount }) => {
  const [isMenuShown, setIsMenuShown] = useState(true);

  const handleCloseMenu = () => {
    setIsMenuShown(false);
  };

  const handleClick = async () => {
    setIsMenuShown(false);
  };

  const menuModalContent = (
    <Styled.Container>
      <Styled.HeadingText>6-Letter Wordle</Styled.HeadingText>
      <Styled.SubheadingText>{`Play day ${dayCount}'s word !`}</Styled.SubheadingText>
      <h3>
        A replica of the Times' Wordle game, but with 6-letter words instead of
        the classic 5-letters
      </h3>
      <Styled.KeyContainer>
        <Styled.GreenKeyText>
          Correct letter in correct place
        </Styled.GreenKeyText>
        <Styled.OrangeKeyText>
          Correct letter in wrong place
        </Styled.OrangeKeyText>
      </Styled.KeyContainer>

      <Styled.Button onClick={handleClick}>Start</Styled.Button>
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
