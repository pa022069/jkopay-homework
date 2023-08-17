import { useEffect, memo } from "react";
import { BsCartDash } from "react-icons/bs";
import { StyleButton, ButtonCount, ButtonText } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { selectItems, clearList } from "@/redux/slices/shoppingCartSlice";
function CartButton() {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    localStorage.removeItem("shoppingCart");
    dispatch(clearList());
  };

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(items));
  }, [items]);
  return (
    <StyleButton onClick={() => handleClearCart()}>
      <BsCartDash />
      {items.length > 0 && <ButtonCount className="count">{items.length}</ButtonCount>}
      <ButtonText className="text">購物車</ButtonText>
    </StyleButton>
  );
}

export default memo(CartButton);