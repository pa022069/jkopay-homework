import Header from "@components/Header";
import { useNavigate } from "react-router-dom";
import { ListBody, ListWrapper, ListItem } from "./style";
import itemData from "@/mock/itemData";
import { formatCurrency, getMinMaxPrice } from "@/utils/helper";
import { ProductPriceItem } from "@/types";
import { Fragment } from "react";

export default function ProductListPage() {
  const navigate = useNavigate();

  const data = (_id: string) =>
    itemData.itemList.find((item: ProductPriceItem) => item.id === _id);

  const minMaxPrice = (_id: string) => getMinMaxPrice(data(_id));

  return (
    <ListWrapper>
      <Header title="商品列表" />
      <ListBody>
        {itemData.itemList.map((item) => (
          <ListItem
            key={item.id}
            onClick={() => {
              navigate(`/${item.id}`);
            }}
          >
            <div className="image">
              <img src={item.images[0].src} alt={item.images[0].alt} />
            </div>
            <div className="content">
              <p className="content__name">{item.name}</p>
              <p className="content__price">
                {minMaxPrice(item.id).price.map(
                  (item: number, index: number) => (
                    <Fragment key={item}>
                      {index !== 0 && <span className="dash">-</span>}
                      <span className="icon">$</span>
                      {formatCurrency(item)}
                    </Fragment>
                  )
                )}
              </p>
            </div>
          </ListItem>
        ))}
        <ListItem
          onClick={() => {
            navigate("/112");
          }}
        >
          查無商品 (測試連結)
        </ListItem>
      </ListBody>
    </ListWrapper>
  );
}
