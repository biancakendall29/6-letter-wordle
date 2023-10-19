import { FC, useState } from "react";
import { AlertTypes } from "./types";
import * as Styled from "./styled-components";

interface IAlertProps {
  message: string;
  type: AlertTypes;
  actionClick?: () => void;
  closeButton?: boolean;
}

export const Alert: FC<IAlertProps> = ({
  message,
  type = AlertTypes.info,
  actionClick,
  closeButton,
}) => {
  const [isAlertVisible, setIsAlertVisible] = useState(true);

  const handleButtonClick = () => {
    setIsAlertVisible(false);
  };

  return (
    <>
      {isAlertVisible && (
        <Styled.AlertContainer type={type}>
          <Styled.TextContainer>
            {message && <Styled.Paragraph>{message}</Styled.Paragraph>}
          </Styled.TextContainer>
          {closeButton && (
            <Styled.CloseContainer onClick={handleButtonClick}>
              <svg
                onClick={actionClick}
                aria-label="close"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </Styled.CloseContainer>
          )}
        </Styled.AlertContainer>
      )}
    </>
  );
};
