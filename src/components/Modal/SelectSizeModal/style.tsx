import theme from "@/utils/theme";
import { styled } from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 10;
  width: 100%;
  background-color: ${theme.colors.gray[400]};
  color: ${theme.colors.white};
  padding: 0.75rem;
`;
