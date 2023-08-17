import { Container, QtyGroup } from "./style";
import { BsPlus, BsDash } from "react-icons/bs";

interface SelectProductQtyProps {
  register: any;
  setValue: any;
  value: number;
}

export default function SelectProductQty(props: SelectProductQtyProps) {
  return (
    <Container>
      <QtyGroup>
        <p className="QGBody__title">購買數量</p>
        <div className="QGBody__qty">
          <button
            type="button"
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
            })}
            type="number"
            id="qty"
          />
          <button
            type="button"
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
