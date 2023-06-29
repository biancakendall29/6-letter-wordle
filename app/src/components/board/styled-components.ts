import styled from "styled-components";
import { TileColours } from "../word-handling/types";

export const BoardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 60px);
  grid-template-rows: repeat(6, 60px);
  grid-gap: 10px;
  width: fit-content;
  height: fit-content;
  background-color: #2b303a;
  padding-top: 20px;
  z-index: 2;
`;

export const BlankSquare = styled.div<{
  background?: TileColours;
  row?: number;
  column?: number;
}>`
  background-color: ${({ background }) => background || "#b8b8b8"};
  text-align: center;
  font-size: 3rem;
  text-transform: uppercase;
  grid-column: ${({ column }) => column && `${column} / ${column}`};
  grid-row: ${({ row }) => row && `${row} / ${row}`};
  z-index: 2;
  opacity: 50%;
`;

export const BackBlankSquare = styled.div<{
  background?: TileColours;
  row?: number;
  column?: number;
}>`
  background-color: ${({ background }) => background || "blue"};
  text-align: center;
  font-size: 3rem;
  text-transform: uppercase;
  grid-column: ${({ column }) => column && `${column} / ${column}`};
  grid-row: ${({ row }) => row && `${row} / ${row}`};
  z-index: 1;
`;
