import styled from "styled-components";
import theme from "@/utils/theme";

export const Container = styled.div`
  background-color: ${theme.colors.gray[400]};
  border-radius: 0.75rem;
  padding: 0.875rem;
`;

const ContentFont = `
  width: 100%;
  font-size: ${theme.fontSize.xs};
  color: ${theme.colors.white};
  line-height: 1.5;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: flex-start;
  font-weight: ${theme.weight.regular}};
  .PAbout {
    &__title {
      ${ContentFont}
      opacity: 0.6;
    }
    &__text {
      ${ContentFont}
      opacity: 0.8;
    }
  }
`;
