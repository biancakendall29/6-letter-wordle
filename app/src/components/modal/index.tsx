import { FC } from "react";
import {
  CloseIcon,
  Content,
  Header,
  HeaderText,
  Wrapper,
} from "./styled-components";
import ReactDOM from "react-dom";

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
      <Wrapper>
        <Header>
          <HeaderText>{headerText}</HeaderText>
          <CloseIcon onClick={hide}>x</CloseIcon>
        </Header>
        <Content>{modalContent}</Content>
      </Wrapper>
    </>
  );

  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
