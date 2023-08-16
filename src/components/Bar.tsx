import theme from "@/utils/theme";
import { styled } from "styled-components";

export const Bar = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.gray[600]};
  margin: 0.5rem 0;
`;