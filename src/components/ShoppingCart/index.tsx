import { useMemo } from "react";
import { Container, ButtonGroup } from "./style";
import Button from "@/components/Button/NormalButton";
import CartButton from "@/components/Button/CartButton";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/slices/shoppingCartSlice";

interface ButtonType {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const buttonList: ButtonType[] = useMemo(
    () => [
      {
        text: "加入購物車",
        isActive: false,
        onClick: () =>
          dispatch(
            addItem({
              id: 111,
              name: "LN 新竹街口攻城獅台灣封城紫色炫風聯名款限定發售復古球衣系列",
              price: 1990,
              quantity: 1,
            })
          ),
      },
      {
        text: "直接購買",
        isActive: true,
        onClick: () => {},
      },
    ],
    []
  );
  return (
    <Container>
      <CartButton />
      <ButtonGroup length={buttonList.length}>
        {buttonList.map((item: ButtonType) => (
          <Button
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
