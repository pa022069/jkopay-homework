import theme from "@/utils/theme";
import { styled } from "styled-components"

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  wifth: 100%;
  background-color: ${theme.colors.black}};
  p {
    color: ${theme.colors.white};
  }
`;

export default function LoadingPage() {
  return (
    <LoadingWrapper>
      <p>Loading...</p>
    </LoadingWrapper>
  )
};