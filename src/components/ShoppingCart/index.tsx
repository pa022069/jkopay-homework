import { useMemo } from "react";
import { Container, ButtonGroup } from "./style";
import Button from "@/components/Button/NormalButton";
import CartButton from "@/components/Button/CartButton";
import { useDispatch } from "react-redux";
import { open } from "@/redux/slices/productSelectSlice";
import { ImageInfo, ProductPriceItemSize } from "@/types";

interface ButtonType {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

interface ShoppingCartProps {
  style?: React.CSSProperties;
  data: {
    id: string;
    name: string;
    image: ImageInfo;
    options: ProductPriceItemSize[];
  };
}

export default function ShoppingCart(props: ShoppingCartProps) {
  const dispatch = useDispatch();
  const buttonList: ButtonType[] = useMemo(
    () => [
      {
        text: "加入購物車",
        isActive: false,
        onClick: () => {
          if (!props.data) return;
          dispatch(
            open({
              ...props.data,
              action: "加入購物車",
            })
          );
        },
      },
      {
        text: "直接購買",
        isActive: true,
        onClick: () => {
          if (!props.data) return;
          dispatch(
            open({
              ...props.data,
              action: "直接購買",
            })
          );
        },
      },
    ],
    [dispatch, props.data]
  );
  return (
    <Container style={props.style}>
      <CartButton />
      <ButtonGroup>
        {buttonList.map((item: ButtonType) => (
          <Button
            style={{
              flex: "1 1 calc(100% / 2)"
            }}
            key={item.text}
            isActive={item.isActive}
            onClick={item.onClick}
          >
            {item.text}
          </Button>
        ))}
      </ButtonGroup>
    </Container>
  );
}
