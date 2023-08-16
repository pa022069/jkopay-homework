import styled from "styled-components";
import theme from "@/utils/theme";

export const Container = styled.button`
  background-color: ${(props: any) =>
    props.isBuy ? theme.colors.red[400] : theme.colors.gray[500]};
  border-radius: 12px;
  padding: 0.75em 1em;
`;
