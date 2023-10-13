import { FC, useState } from "react";
import { Modal } from ".";
import * as Styled from "./styled-components";

interface ILoseMenu {
  day: number;
  todaysWord: string;
}

export const LoseMenu: FC<ILoseMenu> = ({ day, todaysWord }) => {
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
      <Styled.Button onClick={() => console.log("todo share")}>
        SHARE
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
