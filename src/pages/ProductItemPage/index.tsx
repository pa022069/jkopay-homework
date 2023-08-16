import { useParams, useNavigate } from "react-router-dom";
import AboutProduct from "@components/Product/About";
import ProductDetail from "@components/Product/Detail";
import itemData from "@/mock/itemData";
import { ProductPriceItem } from "@/types";
import TProductDetail from "@/template/ProductDetail";
import ProductSlider from "@components/Slider/ProductSlider";
import SelectSizeModal from "@/components/Modal/SelectSizeModal";
import { Content } from "./style";

export default function ProductItemPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = itemData.itemList.find(
    (item: ProductPriceItem) => item.id === id
  );

  if (!data) {
    return <div>404</div>;
  }

  return (
    <TProductDetail storeName={itemData.storeName} handleGoBack={() => {
      navigate(-1);
    }}>
      <ProductSlider />
      <Content>
        <ProductDetail
          name={data.name}
          tags={data.tags}
          details={data.detail}
        />
        {data.about && <AboutProduct data={data.about} />}
      </Content>
      <SelectSizeModal name={data.name} price={3999} options={data.price} />
    </TProductDetail>
  );
}
