import styled from "styled-components";
import theme from "@/utils/theme";
import { BsCartDash } from "react-icons/bs";

export const Container = styled.div`
  background-color: ${theme.colors.gray[400]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;

export const CartIcon = styled(BsCartDash)`
  font-size: 1.5rem;
  flex: none;
`;

export const ButtonGroup = styled.div<{
  length?: number;
}>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1 1 auto;
  button {
    flex: 1 1 calc(100% / ${(props) => props.length || 1});
  }
`;
