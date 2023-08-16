import { Container, RadioSelect, SelectGroup } from "./style";
import { ProductPriceItemSize } from "@/types";

interface SelectProductSizeProps {
  options: ProductPriceItemSize[]
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
          {
            props.options.map((item) => (
              <RadioSelect key={item.size}>
                <input type="radio" name="123" id={item.id} />
                <label htmlFor={item.id} >{item.size}</label>
              </RadioSelect>
            ))
          }
        </div>
      </SelectGroup>
      <SelectGroup>
        <div className="SGHeader">
          <p className="SGHeader__title">顏色</p>
          <p className="SGHeader__sub">補充說明</p>
        </div>
        <div className="SGContent">
          {
            props.options[0].colors.map((item) => (
              <RadioSelect key={item.color}>
                <input type="radio" name="1234" id={item.id} />
                <label htmlFor={item.id} >{item.color}</label>
              </RadioSelect>
            ))
          }
        </div>
      </SelectGroup>
    </Container>
  )
}