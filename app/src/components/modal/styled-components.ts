import { styled } from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 30%;
  left: 35%;
  height: 40%;
  width: 30%;
  padding: 2%;
  background-color: #1f232b;
  z-index: 700;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderText = styled.div`
  color: white;
  font-size: 1.75rem;
  margin-bottom: 1%;
`;

export const CloseIcon = styled.button`
  color: white;
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
  background-color: #5d5568;
  padding: 2%;
  border-radius: 4px;
`;

// --------- StartMenu ----------

export const StartMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #1f232b;
`;

export const PlayButton = styled.button`
  font-size: 2rem;
  font-weight: 800;
  background-color: #aebdea;
  color: #1f232b;
  width: 60%;
  padding: 1rem;
  margin-top: 1rem;
  border: 4px solid #1f232b;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`;
