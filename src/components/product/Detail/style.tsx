import styled from "styled-components";
import theme from "@/utils/theme";

export const Container = styled.div`
  background-color: ${theme.colors.gray[400]};
  border-radius: 0.75em;
  padding: 0.875em;
  h1 {
    font-size: ${theme.fontSize.base};
    color: ${theme.colors.white};
    line-height: 1.5;
  }
`;

export const List = styled.ul`
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.white};
  line-height: 1.5;
  list-style-type: disc;
  padding-left: 1.5em;
`;

export const TagsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 4 0;
`;

export const Tag = styled.div`
  background-color: ${theme.colors.red[800]};
  color: ${theme.colors.white};
  font-size: ${theme.fontSize.xs};
  border-radius: 4px;
  padding: 3px 6px;
  line-height: 1.4;
`;

export const Bar = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.gray[600]};
  margin: 0.5em 0;
`;
