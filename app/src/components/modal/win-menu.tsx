import { FC, useState } from "react";
import { Modal } from ".";
import { Score, Button, Container } from "./styled-components";

interface IWinMenu {
  day: number;
  score: number;
  todaysWord: string;
}

export const WinMenu: FC<IWinMenu> = ({ day, score, todaysWord }) => {
  const [isMenuShown, setIsMenuShown] = useState(true);

  const handleCloseMenu = () => {
    setIsMenuShown(false);
  };

  const menuModalContent = (
    <Container>
      <h1>Congratulations 🎉 You got today's word 😁</h1>
      <h1>{todaysWord}</h1>
      <h2>{`Day ${day}`}</h2>
      <Score>{`${score} / 6`}</Score>

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
