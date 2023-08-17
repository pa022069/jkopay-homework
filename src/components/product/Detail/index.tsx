import { Fragment } from "react";
import { Container, List, TagsGroup, Tag, Price, CurrentPrice, OriginPrice } from "./style";
import { Bar } from "@/components/Bar";
import { formatCurrency } from "@/utils/helper";
interface DetailProps {
  name: string;
  tags?: string[];
  details?: string[];
  priceRange: {
    price: number[];
    originPrice?: number[];
  };
}

export default function Detail(props: DetailProps) {
  return (
    <Container>
      <h1 className="PDetail__title">{props.name}</h1>
      <Price>
        <CurrentPrice>
          {props.priceRange.price.map((item: number, index: number) => (
            <Fragment key={item}>
              {index !== 0 && <span className="PDetail__dash">-</span>}
              <span className="icon">$</span>
              {formatCurrency(item)}
            </Fragment>
          ))}
        </CurrentPrice>
        {props.priceRange.originPrice && (
          <OriginPrice>
            {props.priceRange.originPrice.map((item: number, index: number) => (
              <Fragment key={item}>
                {index !== 0 && <span className="PDetail__dash">-</span>}$
                {formatCurrency(item)}
              </Fragment>
            ))}
          </OriginPrice>
        )}
      </Price>
      {props.tags && props.tags.length !== 0 && (
        <TagsGroup>
          {props.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagsGroup>
      )}
      {props.details && props.details.length !== 0 && (
        <>
          <Bar />
          <List>
            {props.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </List>
        </>
      )}
    </Container>
  );
}
