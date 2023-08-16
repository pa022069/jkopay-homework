import styled from "styled-components";
import theme from "@/utils/theme";

export const Container = styled.div`
  background-color: ${theme.colors.gray[400]};
  border-radius: 0.75rem;
  padding: 0.875rem;
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
  padding-left: 1.5rem;
`;

export const TagsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.25rem 0;
`;

export const Tag = styled.div`
  background-color: ${theme.colors.red[800]};
  color: ${theme.colors.white};
  font-size: ${theme.fontSize.xs};
  border-radius: 0.25rem;
  padding: 0.1875rem 0.375rem;
  line-height: 1.4;
`;

export const Bar = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background-color: ${theme.colors.gray[600]};
  margin: 0.5rem 0;
`;
