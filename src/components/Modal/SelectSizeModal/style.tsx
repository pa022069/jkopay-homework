import theme from "@/utils/theme";
import { styled } from "styled-components";
import { BsX } from "react-icons/bs";

export const Container = styled.form`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 20;
  width: 100%;
  background-color: ${theme.colors.gray[400]};
  color: ${theme.colors.white};
  box-sizing: border-box;
`;

export const Mask = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: ${theme.colors.black};
  opacity: 0.8;
`;

export const CloseButton = styled(BsX)`
  flex: none;
  font-size: ${theme.fontSize["2xl"]};
  color: ${theme.colors.white};
  cursor: pointer;
`;

export const SubmitButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.75rem;
  padding-bottom: 0.75rem;
  button {
    width: 100%;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 1rem 0.75rem;
  padding-bottom: 0;
  .Mheader {
    &__img {
      width: 4rem;
      height: 4rem;
      border-radius: 0.5rem;
      overflow: hidden;
      position: relative;
      flex: none;
      img {
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        object-fit: cover;
        color: transparent;
      }
    }
    &__content {
      position: relative;
      flex: 1 1 auto;
      p {
        widthL 100%;
      }
      &--name {
        font-size: ${theme.fontSize.sm};
        line-height: 1.4;
      }
      &--price {
        font-size: ${theme.fontSize.xl};
        line-height: 1.5;
        .dash {
          margin: 0 0.25em;
        }
        .icon {
          font-size: ${theme.fontSize.base};
        }
      }
    }
  }
`;
