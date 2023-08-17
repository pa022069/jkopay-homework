import { useParams, useNavigate } from "react-router-dom";
import AboutProduct from "@components/Product/About";
import ProductDetail from "@components/Product/Detail";
import itemData from "@/mock/itemData";
import { ProductPriceItem } from "@/types";
import TProductDetail from "@/template/ProductDetail";
import ProductSlider from "@components/Slider/ProductSlider";
import SelectSizeModal from "@/components/Modal/SelectSizeModal";
import ShoppingCart from "@components/ShoppingCart";
import { useSelector } from "react-redux";
import { selectProductSelect } from "@/redux/slices/productSelectSlice";
import { Content, ContentWrapper, ErrorContent } from "./style";
import { getMinMaxPrice } from "@/utils/helper";

export default function ProductItemPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const modalState = useSelector(selectProductSelect);
  const data = itemData.itemList.find(
    (item: ProductPriceItem) => item.id === id
  );

  const minMaxPrice = getMinMaxPrice(data);

  return (
    <TProductDetail
      storeName={itemData.storeName}
      handleGoBack={() => {
        navigate(-1);
      }}
    >
      {!data ? (
        <ErrorContent>查無商品</ErrorContent>
      ) : (
        <>
          <ContentWrapper>
            <ProductSlider
              images={
                data.images.length > 0
                  ? data.images
                  : [
                      {
                        src: "https://fakeimg.pl/600x600/?text=Hello",
                        alt: "Hello",
                      },
                    ]
              }
            />
            <Content>
              <ProductDetail
                name={data.name}
                tags={data.tags}
                details={data.detail}
                priceRange={minMaxPrice}
              />
              {data.about && <AboutProduct data={data.about} />}
            </Content>
          </ContentWrapper>
          <ShoppingCart
            data={{
              id: data.id,
              name: data.name,
              image:
                data.images.length > 0
                  ? data.images[0]
                  : {
                      src: "https://fakeimg.pl/600x600/?text=Hello",
                      alt: "Hello",
                    },
              options: data.price,
            }}
            style={{
              flex: "none",
            }}
          />
          {modalState.isOpen && <SelectSizeModal />}
        </>
      )}
    </TProductDetail>
  );
}
