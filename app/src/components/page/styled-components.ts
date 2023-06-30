import styled from "styled-components";
import { defaultTheme } from "../../constants/theme";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  width: 100vw;
  height: 100vh;
  background-color: ${defaultTheme.backgroundPrimary};
`;
