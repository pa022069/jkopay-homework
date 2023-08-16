import styled from "styled-components";
import theme from "@/utils/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Content = styled.div`
  position: relative;
  background-color: ${theme.colors.black};
  overflow-y: auto;
  flex: 1 1 auto;
`;
