import styled from "styled-components";
import { AlertTypes } from "./types";

export const AlertContainer = styled.div<{
  type: AlertTypes;
  width?: string;
  margin?: string;
  padding?: string;
}>`
  background: ${({ type }) => type};
  border-left: ${({ type }) => `4px solid ${type}`};
  display: flex;
  width: ${({ width }) => width ?? "50%"};
  padding: ${({ padding }) => padding ?? "20px 10px"};
  margin: ${({ margin }) => margin ?? "20px auto 0px auto"};
`;

export const TextContainer = styled.div`
  padding-left: 10px;

  & > *:last-child {
    margin-bottom: 0;
  }
`;

export const AlertHeading = styled.h2`
  color: white;
  width: fit-content;
  line-height: 24px;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  color: white;
  line-height: 1.5;
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
