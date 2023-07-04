import { Dispatch, FC, SetStateAction, useState } from "react";
import { Modal } from ".";
import { Button, Container } from "./styled-components";

interface IStartMenu {
  setTodaysWord: Dispatch<SetStateAction<string>>;
}

export const StartMenu: FC<IStartMenu> = ({ setTodaysWord }) => {
  const [isMenuShown, setIsMenuShown] = useState(true);

  const handleCloseMenu = () => {
    setIsMenuShown(false);
  };

  const handleClick = async () => {
    setIsMenuShown(false);
  };

  const menuModalContent = (
    <Container>
      <h1>6-Letter Wordle</h1>
      <div>
        <Button onClick={handleClick}>Play</Button>
      </div>
    </Container>
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
