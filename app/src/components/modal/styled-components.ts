import { styled } from "styled-components";
import { defaultTheme } from "../../constants/theme";

export const Wrapper = styled.div`
  position: fixed;
  top: 10%;
  left: 8%;
  height: 50%;
  width: 80%;
  padding: 2%;
  background-color: ${defaultTheme.backgroundSecondary};
  z-index: 700;
  display: flex;
  flex-direction: column;
  border-radius: ${defaultTheme.borderRadius};
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
  font-size: 1.2rem;
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
`;

// --------- Winning Menu ----------

export const WinningContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: ${defaultTheme.textPrimary};
`;

export const ShareButton = styled.button`
  font-size: 2rem;
  font-weight: 800;
  background-color: ${defaultTheme.backgroundPrimary};
  color: ${defaultTheme.textPrimary};
  width: 60%;
  padding: 1rem;
  margin-top: 1rem;
  border: 4px solid ${defaultTheme.borderPrimary};
  border-radius: ${defaultTheme.borderRadius};

  &:hover {
    cursor: pointer;
  }
`;

export const Score = styled.h1`
  font-size: 2rem;
  color: ${defaultTheme.green};
`;
