import { BsCartDash } from "react-icons/bs";
import { Container, ButtonGroup } from "./style";
import Button from "@components/Button";

export default function ShoppingCart() {
  return (
    <Container>
      <BsCartDash />
      <ButtonGroup length={2}>
        <Button>加入購物車</Button>
        <Button isActive>直接購買</Button>
      </ButtonGroup>
    </Container>
  );
}
