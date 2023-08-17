import theme from "@/utils/theme";
import { styled } from "styled-components";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ListBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.75rem;
  flex: 1 1 auto;
  height: 100%;
  background-color: ${theme.colors.black};
`;

export const ListItem = styled.div`
  flex: 0 0 auto;
  background-color: ${theme.colors.gray["400"]};
  padding: 0.75rem;
  border-radius: 0.5rem;
  color: ${theme.colors.white};
  line-height: 1.5;
  display: flex;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
  .image {
    width: 40%;
    img {
      width: 100%;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    &__name {
      font-size: ${theme.fontSize["sm"]};
    }
    &__price {
      font-size: ${theme.fontSize["base"]};
      .dash {
        margin: 0 0.25rem;
      }
    }
  }
`;
