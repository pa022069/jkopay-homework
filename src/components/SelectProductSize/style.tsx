import theme from "@/utils/theme";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.75rem;
`;

export const SelectGroup = styled.div`
  margin-bottom: 0.625rem;
  .SGHeader {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    padding-bottom: 0.5rem;
    &__title {
      color: ${theme.colors.white};
      font-size: ${theme.fontSize.base};
      line-height: 1.5;
    }
    &__sub {
      color: ${theme.colors.white};
      font-size: ${theme.fontSize.xs};
      opacity: 0.5;
      line-height: 1.5;
    }
  }
  .SGContent {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.625rem;
  }
`;

export const RadioSelect = styled.div<{
  isOutOfStock?: boolean;
}>`
  opacity: ${(props) => (props.isOutOfStock ? "0.2" : "1")};
  pointer-events: ${(props) => (props.isOutOfStock ? "none" : "auto")};
  input:checked + label {
    background-color: ${theme.colors.red[400]};
    border: 1px solid ${theme.colors.red[400]};
  }
  input {
    display: none;
  }
  label {
    color: ${theme.colors.white};
    font-size: ${theme.fontSize.sm};
    border: 1px solid ${theme.colors.gray[300]};
    border-radius: 0.5rem;
    padding: 0.5rem 0.7rem;
    display: block;
    width: fit-content;
  }
`;
