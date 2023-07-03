import { FC, useState } from "react";
import { Modal } from ".";
import { Score, ShareButton, WinningContainer } from "./styled-components";

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
    <WinningContainer>
      <h1>Sorry, you did not get today's word ☹️</h1>
      <h2>{`Day ${day}`}</h2>
      <Score>{`X / 6`}</Score>
      <div>
        <ShareButton onClick={() => console.log("todo share")}>
          SHARE
        </ShareButton>
      </div>
    </WinningContainer>
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
