import styled from "styled-components";

export const KeyboardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 70px);
  grid-template-rows: repeat(3, 70px);
  grid-gap: 20px;
  width: fit-content;
  height: fit-content;
  background-color: #2b303a;
  margin-top: 40px;
  align-items: center;

  &:nth-child(3) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const KeyboardSquare = styled.button`
  background-color: #b8b8b8;
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
  aspect-ratio: 1 / 1;
`;
