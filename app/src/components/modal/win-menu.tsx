import { FC, useState } from "react";
import { Modal } from ".";
import { Score, ShareButton, WinningContainer } from "./styled-components";

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
    <WinningContainer>
      <h1>Congratulations 🎉 You got today's word 😁</h1>
      <h2>{todaysWord}</h2>
      <h2>{`Day ${day}`}</h2>
      <Score>{`${score} / 6`}</Score>

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
