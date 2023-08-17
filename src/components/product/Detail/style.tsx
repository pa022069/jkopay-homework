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
    font-weight: ${theme.weight.medium}};
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.125rem 0;
  .dash {
    margin: 0 0.25em;
  }
  .currentPrice {
    color: ${theme.colors.white};
    font-size: ${theme.fontSize.xl};
    line-height: 1.5rem;
    font-weight: ${theme.weight.medium}};
    .icon {
      font-size: ${theme.fontSize.base};
    }
  }
  .originPrice {
    color: ${theme.colors.white};
    font-size: ${theme.fontSize.sm};
    line-height: 1.5rem;
    opacity: 0.3;
    font-weight: ${theme.weight.regular}};
  }
`;

export const List = styled.ul`
  font-size: ${theme.fontSize.sm};
  color: ${theme.colors.white};
  line-height: 1.5;
  list-style-type: disc;
  padding-left: 1.5rem;
  font-weight: ${theme.weight.regular}};
`;

export const TagsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.25rem 0;
`;

export const Tag = styled.div`
  background-color: ${theme.colors.red[800]};
  color: rgba(255, 255, 255, 0.9);
  font-size: ${theme.fontSize.xs};
  border-radius: 0.25rem;
  padding: 0.1875rem 0.375rem;
  line-height: 1.4;
  font-weight: ${theme.weight.medium}};
`;
