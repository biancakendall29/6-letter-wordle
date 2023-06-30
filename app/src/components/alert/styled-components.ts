import styled from "styled-components";
import { AlertTypes } from "./types";
import { defaultTheme } from "../../constants/theme";

export const AlertContainer = styled.div<{
  type: AlertTypes;
}>`
  background: transparent;
  border: ${({ type }) => `2px solid ${type}`};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 3rem;
  top: 1.5rem;
  z-index: 10;
`;

export const TextContainer = styled.div`
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
`;

export const Paragraph = styled.p`
  color: ${defaultTheme.textPrimary};
  line-height: 2rem;
`;

export const CloseContainer = styled.div`
  margin-left: auto;
  opacity: 0.5;
  height: 32px;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
