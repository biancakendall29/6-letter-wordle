import { FC, useState } from "react";
import { Modal } from ".";
import { Score, Button, Container } from "./styled-components";

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
    <Container>
      <h1>Sorry, you did not get today's word ☹️</h1>
      <h2>{todaysWord}</h2>
      <h2>{`Day ${day}`}</h2>
      <Score>{`X / 6`}</Score>
      <div>
        <Button onClick={() => console.log("todo share")}>SHARE</Button>
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
