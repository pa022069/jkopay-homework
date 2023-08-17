import { memo } from "react";
import { Container, QtyGroup } from "./style";
import { BsPlus, BsDash } from "react-icons/bs";

interface SelectProductQtyProps {
  register: any;
  setValue: any;
  value: number;
  maxQty?: number;
}

function SelectProductQty(props: SelectProductQtyProps) {
  return (
    <Container>
      <QtyGroup>
        <p className="QGBody__title">購買數量</p>
        <div className="QGBody__qty">
          <button
            type="button"
            disabled={props.value === 1}
            onClick={() => {
              if (props.value > 1) {
                props.setValue("qty", props.value - 1);
              }
            }}
          >
            <BsDash />
          </button>
          <input
            {...props.register("qty", {
              min: 1,
              max: props.maxQty || 100,
            })}
            type="number"
            id="qty"
          />
          <button
            type="button"
            disabled={!props.maxQty || props.value === props.maxQty}
            onClick={() => {
              props.setValue("qty", props.value + 1);
            }}
          >
            <BsPlus />
          </button>
        </div>
      </QtyGroup>
    </Container>
  );
}

export default memo(SelectProductQty);