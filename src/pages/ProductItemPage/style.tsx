import theme from "@/utils/theme";
import { styled } from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.75rem;
`;

export const ContentWrapper = styled.div`
  flex: 1 1 auto;
  height: 100%;
  overflow-y: auto;
`;

export const ErrorContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  height: 100%;
  opacity: 0.5;
  color: ${theme.colors.white};
`;
