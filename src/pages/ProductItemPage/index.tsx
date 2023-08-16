import { useParams } from "react-router-dom";
import Header from "@components/Header";
import AboutProduct from "@components/product/About";
import ProductDetail from "@components/product/Detail";
import itemData from "@/mock/itemData";
import ShoppingCart from "@components/ShoppingCart";
import { ProductPriceItem } from "@/types";
import { Content } from "./style";

export default function ProductItemPage() {
  const { id } = useParams();
  const data = itemData.find((item: ProductPriceItem) => item.id === id);

  if (!data) {
    return <div>404</div>;
  }

  return (
    <div>
      <Header title={data.name} />
      {/* <div>{id}</div> */}
      <Content>
        <ProductDetail
          name={data.name}
          tags={data.tags}
          details={data.detail}
        />
        {data.about && <AboutProduct data={data.about} />}
      </Content>
      <ShoppingCart />
    </div>
  );
}
