import styled from "styled-components";
import theme from "@/utils/theme";

export const Container = styled.button<{
  isActive?: boolean;
}>`
  outline: none;
  border: none;
  background-color: ${(props: any) =>
    props.isActive ? theme.colors.red[400] : theme.colors.gray[500]};
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  color: ${theme.colors.white};
  font-weight: ${theme.weight.semibold};
  font-size: ${theme.fontSize.lg};
  cursor: pointer;
  &:active {
    opacity: 0.7;
  }
`;
