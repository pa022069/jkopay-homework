import theme from "@/utils/theme";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.75rem;
  gap: 0.75rem;
`;

export const QtyGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .QGBody {
    &__title {
      color: ${theme.colors.white};
      font-size: ${theme.fontSize.base};
      line-height: 1.5;
    }
    &__qty {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
      button {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${theme.colors.gray[500]};
        color: ${theme.colors.white};
        border: none;
        font-size: ${theme.fontSize["2xl"]};
        padding: 0;
        border-radius: 3px;
        &:active {
          opacity: 0.7;
        }
      }
      input {
        width: 2em;
        background: none;
        color: ${theme.colors.white};
        text-align: center;
        font-size: ${theme.fontSize.xl};
        line-height: 1.2;
        border: none;
        &:focus {
          outline: none;
        }
      }
    }
  }
`;
