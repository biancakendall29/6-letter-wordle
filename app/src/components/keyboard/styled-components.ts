import styled from "styled-components";
import { defaultTheme } from "../../constants/theme";

export const KeyboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${defaultTheme.backgroundPrimary};
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 4rem;
`;

export const KeyboardRow1 = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 2rem);
  grid-template-rows: repeat(1, 3rem);
  grid-gap: 0.2rem;
  width: fit-content;
  height: fit-content;
  background-color: ${defaultTheme.backgroundPrimary};
  margin-top: 40px;
  text-align: center;
`;

export const KeyboardRow2 = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 2rem);
  grid-template-rows: repeat(1, 3rem);
  grid-gap: 0.2rem;
  width: fit-content;
  height: fit-content;
  background-color: ${defaultTheme.backgroundPrimary};
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const KeyboardRow3 = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 2rem);
  grid-template-rows: repeat(1, 3rem);
  grid-gap: 0.2rem;
  width: fit-content;
  height: fit-content;
  background-color: ${defaultTheme.backgroundPrimary};
  margin-top: 20px;
  align-items: center;
`;

export const KeyboardSquare = styled.button`
  background-color: ${defaultTheme.backgroundSecondary};
  color: ${defaultTheme.textSecondary};
  text-align: center;
  font-size: 1.2rem;
  text-transform: uppercase;
  border-radius: ${defaultTheme.borderRadius};
  width: 100%;
  height: 100%;
`;

export const BackspaceSquare = styled.button`
  background-color: ${defaultTheme.backgroundSecondary};
  color: ${defaultTheme.textSecondary};
  border-radius: ${defaultTheme.borderRadius};
  grid-column: 9 / 9;
  grid-row: 1 / 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EnterSquare = styled.button`
  background-color: ${defaultTheme.backgroundSecondary};
  color: ${defaultTheme.textSecondary};
  border-radius: ${defaultTheme.borderRadius};
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
