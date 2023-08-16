import styled from "styled-components";
import theme from "@/utils/theme";

export const Container = styled.div`
  background-color: ${theme.colors.gray[400]};
  border-radius: 0.75rem;
  padding: 0.875rem;
`;

const ContentFont = `
  font-size: ${theme.fontSize.xs};
  color: ${theme.colors.white};
  line-height: 1.5;
`;

export const Bar = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.gray[600]};
  margin: 0.5rem 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  h2 {
    ${ContentFont}
    opacity: 0.6;
  }
  p {
    ${ContentFont}
    opacity: 0.8;
  }
`;
