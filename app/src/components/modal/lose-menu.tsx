import { FC, useState } from "react";
import { Modal } from ".";
import { ShareButton, WinningContainer } from "./styled-components";

export const LoseMenu: FC = () => {
  const [isMenuShown, setIsMenuShown] = useState(true);

  const handleCloseMenu = () => {
    setIsMenuShown(false);
  };

  const menuModalContent = (
    <WinningContainer>
      <h1>Sorry, you did not get today's word ☹️</h1>
      <h2>insert todays word</h2>
      <h2>insert day # : X / 6</h2>
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
