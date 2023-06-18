import styled from "styled-components";

export const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 60px);
  grid-template-rows: repeat(6, 60px);
  grid-gap: 10px;
  width: fit-content;
  height: fit-content;
  background-color: #2b303a;
  padding-top: 20px;
`;

export const BlankSquare = styled.div`
  background-color: #b8b8b8;
  text-align: center;
  font-size: 3rem;
  text-transform: uppercase;
`;
