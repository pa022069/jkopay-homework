import styled from "styled-components";
import theme from "@/utils/theme";

export const StyleButton = styled.button`
  position: relative;
  font-size: 1.5rem;
  color: white;
  flex: none;
  background: none;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 0 0.5rem;
  padding-top: 0.5rem;
  cursor: pointer;
  font-weight: ${theme.weight.regular}};

  .count {
    position: absolute;
    right: 0.5rem;
    top: 0.15rem;
    color: ${theme.colors.white};
    font-size: ${theme.fontSize.xs};
    background: ${theme.colors.red[400]};
    border-radius: 100%;
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }
  p {
    font-size: ${theme.fontSize.xs};
    scale: 0.9;
  }
`;
