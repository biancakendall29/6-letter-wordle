import { FC } from "react";
import * as Styled from "./styled-components";
import ReactDOM from "react-dom";
import { CloseIcon } from "../glyphs/close";
import { defaultTheme } from "../../constants/theme";

interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText?: string;
}

export const Modal: FC<ModalProps> = ({
  isShown,
  hide,
  modalContent,
  headerText,
}) => {
  const modal = (
    <>
      <Styled.Wrapper>
        <Styled.Header>
          <Styled.HeaderText>{headerText}</Styled.HeaderText>
          <Styled.CloseIcon onClick={hide}>
            <CloseIcon
              icon
              iconSize={36}
              title="Close"
              fill={defaultTheme.textSecondary}
            />
          </Styled.CloseIcon>
        </Styled.Header>
        <Styled.Content>{modalContent}</Styled.Content>
      </Styled.Wrapper>
    </>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
