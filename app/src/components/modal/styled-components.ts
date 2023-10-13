import { styled } from "styled-components";
import { defaultTheme } from "../../constants/theme";

// --------- General Modal Styles ----------

export const Wrapper = styled.div`
  position: fixed;
  top: 10%;
  left: 8%;
  height: 70%;
  width: 80%;
  padding: 2%;
  background-color: ${defaultTheme.backgroundSecondary};
  z-index: 700;
  display: flex;
  flex-direction: column;
  border-radius: ${defaultTheme.borderRadius};
  border: 4px solid ${defaultTheme.textSecondary};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderText = styled.div`
  color: ${defaultTheme.textSecondary};
  font-size: 1rem;
  margin-bottom: 1%;
`;

export const CloseIcon = styled.button`
  color: ${defaultTheme.textSecondary};
  background-color: transparent;
  font-size: 1rem;
  border: none;
  top: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  width: auto;
  height: 100%;
  background-color: ${defaultTheme.backgroundPrimary};
  padding: 2%;
  border-radius: 4px;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
`;

// --------- Start, Winning, Losing Menu styles ----------

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  color: ${defaultTheme.textPrimary};
  width: 100%;
  margin: 2rem;
  gap: 1rem;
`;

export const HeadingText = styled.h1`
  color: ${defaultTheme.textPrimary};
  font-size: 1.8rem;
  margin: 0.5rem;
`;

export const SubheadingText = styled.h1`
  color: ${defaultTheme.textPrimary};
  font-size: 1.2rem;
  margin: 0.5rem;
`;

export const KeyContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const GreenKeyText = styled.h2`
  color: ${defaultTheme.textPrimary};
  background-color: rgba(0, 128, 0, 0.7);
  font-weight: 900;
  font-size: 1rem;
  margin: auto;
  width: fit-content;
  padding: 0.3rem;
  border-radius: ${defaultTheme.borderRadius};
`;

export const OrangeKeyText = styled(GreenKeyText)`
  background-color: rgba(255, 120, 31, 0.7);
`;

export const Button = styled.button`
  font-size: 2rem;
  font-weight: 800;
  background-color: ${defaultTheme.backgroundPrimary};
  color: ${defaultTheme.textPrimary};
  width: 70%;
  padding: 1rem;
  border: 4px solid ${defaultTheme.borderPrimary};
  border-radius: ${defaultTheme.borderRadius};
  margin: auto;

  &:hover {
    cursor: pointer;
  }
`;

export const Score = styled.h1`
  font-size: 2.5rem;
  width: fit-content;
  padding: 0.2rem;
  margin: auto;
  border-radius: ${defaultTheme.borderRadius};
  background-color: ${defaultTheme.backgroundSecondary};
  color: ${defaultTheme.green};
`;
