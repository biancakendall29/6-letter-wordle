import styled from "styled-components";

export const KeyboardRow1 = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 70px);
  grid-template-rows: repeat(1, 70px);
  grid-gap: 10px;
  width: fit-content;
  height: fit-content;
  background-color: #2b303a;
  margin-top: 40px;
  align-items: center;
`;

export const KeyboardRow2 = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 70px);
  grid-template-rows: repeat(1, 70px);
  grid-gap: 10px;
  width: fit-content;
  height: fit-content;
  background-color: #2b303a;
  margin-top: 20px;
  align-items: center;
`;

export const KeyboardRow3 = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 70px);
  grid-template-rows: repeat(1, 70px);
  grid-gap: 10px;
  width: fit-content;
  height: fit-content;
  background-color: #2b303a;
  margin-top: 20px;
  align-items: center;
`;

export const KeyboardSquare = styled.button`
  background-color: #b8b8b8;
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
  aspect-ratio: 1 / 1;
`;

export const BackspaceSquare = styled.button`
  background-color: #b8b8b8;
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
  grid-column: 8 / 10;
  grid-row: 1 / 1;
  height: 100%;
`;
