import styled from "styled-components";
import { TileColours } from "../word-handling/types";
import { defaultTheme } from "../../constants/theme";

export const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
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
`;

export const BlankSquare = styled.div<{
  background?: TileColours;
  row?: number;
  column?: number;
}>`
  background-color: ${({ background }) => background || "transparent"};
  color: ${defaultTheme.textPrimary};
  border: 2px solid ${defaultTheme.backgroundSecondary};
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: ${defaultTheme.borderRadius};
  grid-column: ${({ column }) => column && `${column} / ${column}`};
  grid-row: ${({ row }) => row && `${row} / ${row}`};
  z-index: 2;
  opacity: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackBlankSquare = styled.div<{
  background?: TileColours;
  row?: number;
  column?: number;
}>`
  background-color: ${({ background }) => background || "transparent"};
  color: ${defaultTheme.textPrimary};
  border: 2px solid ${defaultTheme.backgroundSecondary};
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: ${defaultTheme.borderRadius};
  grid-column: ${({ column }) => column && `${column} / ${column}`};
  grid-row: ${({ row }) => row && `${row} / ${row}`};
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
