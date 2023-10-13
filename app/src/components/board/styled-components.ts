import styled from "styled-components";
import { TileColours } from "../word-handling/types";
import { defaultTheme, device } from "../../constants/theme";

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;

  @media ${device.mobileS_height} {
    margin-top: 4rem;
  }
`;

export const BoardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 3rem);
  grid-template-rows: repeat(6, 3rem);
  grid-gap: 10px;
  width: fit-content;
  height: fit-content;
  background-color: ${defaultTheme.backgroundPrimary};
  padding-top: 20px;
  z-index: 2;

  @media ${device.mobileM} {
    grid-template-columns: repeat(6, 2.5rem);
    grid-template-rows: repeat(6, 2.5rem);
  }
`;

export const FrontCard = styled.div<{
  background?: TileColours;
  row?: number;
  column?: number;
  flipped?: string;
}>`
  background-color: ${(props) => props.background};
  color: ${defaultTheme.textPrimary};
  border: 2px solid ${defaultTheme.backgroundSecondary};
  border-radius: ${defaultTheme.borderRadius};
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  grid-column: ${({ column }) => column && `${column} / ${column}`};
  grid-row: ${({ row }) => row && `${row} / ${row}`};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  @media ${device.mobileM} {
    font-size: 1.5rem;
  }
`;

// FOR FLIP ANIMATION

// export const Card = styled.div`
//   width: 3rem;
//   height: 3rem;
//   background-color: transparent;
//   border: 2px solid ${defaultTheme.backgroundSecondary};
//   border-radius: ${defaultTheme.borderRadius};
//   perspective: 1000px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const flipAnimation = keyframes`
//   0% {
//     transform: rotateY(0);
//   }
//   50% {
//     transform: rotateY(90deg);
//   }
//   100% {
//     transform: rotateY(180deg);
//   }
// `;

// export const AnimatedCard = styled(Card)`
//   animation: ${flipAnimation} 0.5s ease-in-out;
// `;
