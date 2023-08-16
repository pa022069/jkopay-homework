import Header from "@components/Header";
import ShoppingCart from "@components/ShoppingCart";
import { Content, Wrapper } from "./style";

interface ProductDetailProps {
  storeName: string;
  children: React.ReactNode;
  handleGoBack?: () => void;
}

export default function TProductDetail(props: ProductDetailProps) {
  return (
    <Wrapper>
      <Header
        handleGoBack={props.handleGoBack}
        style={{
          flex: "none",
        }}
        title={props.storeName}
      />
      <Content>{props.children}</Content>
      <ShoppingCart
        style={{
          flex: "none",
        }}
      />
    </Wrapper>
  );
}