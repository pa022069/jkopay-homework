import { useParams, useNavigate } from "react-router-dom";
import AboutProduct from "@components/Product/About";
import ProductDetail from "@components/Product/Detail";
// import { ProductPriceItem } from "@/types";
import TProductDetail from "@/template/ProductDetail";
import ProductSlider from "@components/Slider/ProductSlider";
import SelectSizeModal from "@/components/Modal/SelectSizeModal";
import ShoppingCart from "@components/ShoppingCart";
import { useSelector } from "react-redux";
import { selectProductSelect } from "@/redux/slices/productSelectSlice";
import { Content, ContentWrapper, ErrorContent } from "./style";
import { getMinMaxPrice } from "@/utils/helper";
import { useMutation } from "@tanstack/react-query";
import { postProductItem } from "@/api/product";
import { memo, useEffect } from "react";
import LoadingPage from "../LoadingPage";

function ProductItemPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const modalState = useSelector(selectProductSelect);

  const { data: apiData, mutate, isLoading } = useMutation({
    mutationFn: postProductItem
  });

  useEffect(() => {
    mutate({ id });
  }, [id, mutate]);

  if (!apiData || isLoading) {
    return (
      <LoadingPage />
    )
  }

  const minMaxPrice = getMinMaxPrice(apiData.item);

  return (
    <TProductDetail
      storeName={apiData.storeName}
      handleGoBack={() => {
        navigate(-1);
      }}
    >
      {!apiData.item ? (
        <ErrorContent>查無商品</ErrorContent>
      ) : (
        <>
          <ContentWrapper>
            <ProductSlider
              images={
                apiData.item.images.length > 0
                  ? apiData.item.images
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
                name={apiData.item.name}
                tags={apiData.item.tags}
                details={apiData.item.detail}
                priceRange={minMaxPrice}
              />
              {apiData.item.about && <AboutProduct data={apiData.item.about} />}
            </Content>
          </ContentWrapper>
          <ShoppingCart
            data={{
              id: apiData.item.id,
              name: apiData.item.name,
              image:
                apiData.item.images.length > 0
                  ? apiData.item.images[0]
                  : {
                    src: "https://fakeimg.pl/600x600/?text=Hello",
                    alt: "Hello",
                  },
              options: apiData.item.price,
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

export default memo(ProductItemPage);