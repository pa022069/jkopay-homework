import { useEffect } from "react";
import { BsCartDash } from "react-icons/bs";
import { StyleButton } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { selectItems, clearList } from "@/redux/slices/shoppingCartSlice";
export default function CartButton() {
  const items = useSelector(selectItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    localStorage.removeItem("shoppingCart");
    dispatch(clearList());
  };

  useEffect(() => {
    console.log(items);
    localStorage.setItem("shoppingCart", JSON.stringify(items));
  }, [items]);
  return (
    <StyleButton onClick={() => handleClearCart()}>
      <BsCartDash />
      {items.length > 0 && <span>{items.length}</span>}
      <p>購物車</p>
    </StyleButton>
  );
}
