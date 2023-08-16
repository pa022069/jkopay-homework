import styled from "styled-components";
import theme from "@/utils/theme";
import { BsChevronLeft } from "react-icons/bs";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.black};
  padding: 0.625rem 2.5rem;
  .title {
    color: ${theme.colors.white};
    font-weight: 600;
    font-size: 1.0625rem;
    line-height: 1.4;
  }
`;

export const LeftArrowIcon = styled(BsChevronLeft)`
  position: absolute;
  left: 0.625rem;
  color: ${theme.colors.white};
  font-size: ${theme.fontSize.xl};
`;
