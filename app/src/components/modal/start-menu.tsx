import { FC, useState } from "react";
import { Modal } from ".";
import { PlayButton, StartMenuContainer } from "./styled-components";

export const StartMenu: FC = () => {
  const [isMenuShown, setIsMenuShown] = useState(true);

  const handleCloseMenu = () => {
    setIsMenuShown(false);
  };

  const menuModalContent = (
    <StartMenuContainer>
      <h1>Start Menu</h1>
      <h2>Click play to begin</h2>
      <div>
        <PlayButton onClick={() => setIsMenuShown(false)}>PLAY</PlayButton>
      </div>
    </StartMenuContainer>
  );

  return (
    <>
      <Modal
        isShown={isMenuShown}
        hide={handleCloseMenu}
        modalContent={menuModalContent}
        headerText="Start Menu"
      />
    </>
  );
};
