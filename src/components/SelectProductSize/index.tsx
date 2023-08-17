import { Container, RadioSelect, SelectGroup } from "./style";
import { ProductPriceItemSize } from "@/types";
import _ from "lodash";

interface SelectProductSizeProps {
  options: ProductPriceItemSize[];
  register: any;
  sizeValue: string | undefined;
}

export default function SelectProductSize(props: SelectProductSizeProps) {
  return (
    <Container>
      <SelectGroup>
        <div className="SGHeader">
          <p className="SGHeader__title">尺寸</p>
          <p className="SGHeader__sub">補充說明</p>
        </div>
        <div className="SGContent">
          {props.options.map((item) => (
            <RadioSelect key={item.size}>
              <input
                {...props.register("size", {
                  required: "請選擇尺寸",
                })}
                type="radio"
                value={item.size}
                id={item.id}
              />
              <label htmlFor={item.id}>{item.size}</label>
            </RadioSelect>
          ))}
        </div>
      </SelectGroup>
      <SelectGroup>
        <div className="SGHeader">
          <p className="SGHeader__title">顏色</p>
          <p className="SGHeader__sub">補充說明</p>
        </div>
        <div className="SGContent">
          {props.options[
            props.sizeValue
              ? _.findIndex(props.options, ["size", props.sizeValue])
              : 0
          ].colors.map((item) => (
            <RadioSelect key={item.color} isOutOfStock={item.stock === 0}>
              <input
                {...props.register("color", {
                  required: "請選擇顏色",
                })}
                type="radio"
                value={item.color}
                id={item.id}
              />
              <label htmlFor={item.id}>{item.color}</label>
            </RadioSelect>
          ))}
        </div>
      </SelectGroup>
    </Container>
  );
}
