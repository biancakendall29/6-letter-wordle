import styled from "styled-components";
import { defaultTheme, device } from "../../constants/theme";

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
  grid-gap: 0.2rem;
  text-align: center;
  width: fit-content;
  height: fit-content;
  background-color: ${defaultTheme.backgroundPrimary};
  grid-template-columns: repeat(10, 2rem);
  grid-template-rows: repeat(1, 3rem);
  margin-top: 40px;

  @media ${device.mobileS_height} {
    margin-top: 20px;
  }
`;

export const KeyboardRow2 = styled(KeyboardRow1)`
  grid-template-columns: repeat(9, 2rem);
  grid-template-rows: repeat(1, 3rem);
  margin-top: 20px;

  @media ${device.mobileS_height} {
    margin-top: 5px;
  }
`;

export const KeyboardRow3 = styled(KeyboardRow1)`
  grid-template-columns: repeat(9, 2rem);
  grid-template-rows: repeat(1, 3rem);
  margin-top: 20px;

  @media ${device.mobileS_height} {
    margin-top: 5px;
  }
`;

export const KeyboardSquare = styled.button`
  background-color: ${defaultTheme.backgroundSecondary};
  color: ${defaultTheme.textSecondary};
  border-radius: ${defaultTheme.borderRadius};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  text-transform: uppercase;

  @media ${device.mobileS_height} {
    height: 70%;
    font-size: 1rem;
  }
`;

export const BackspaceSquare = styled(KeyboardSquare)`
  grid-column: 9 / 9;
  grid-row: 1 / 1;
`;

export const EnterSquare = styled(KeyboardSquare)`
  grid-column: 1 / 1;
  grid-row: 1 / 1;
`;
