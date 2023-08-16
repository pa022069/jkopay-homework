import { Bar } from "@/components/Bar";
import { Container, Mask, ModalHeader, CloseButton } from "./style";
import SelectProductSize from "@/components/SelectProductSize";
import { ProductPriceItemSize } from "@/types";

interface SelectSizeModalProps {
  name: string;
  price: number;
  options: ProductPriceItemSize[]
}

export default function SelectSizeModal(props: SelectSizeModalProps) {
  return (
    <>
      <Mask />
      <Container>
        <ModalHeader>
          <div className="Mheader__img">
            <img src="./images/800x.webp" alt="" />
          </div>
          <div className="Mheader__content">
            <p className="Mheader__content--name">{props.name}</p>
            <p className="Mheader__content--price"><span>$</span>{props.price}</p>
          </div>
          <CloseButton />
        </ModalHeader>
        <Bar />
        <SelectProductSize options={props.options} />
        <Bar />
      </Container>
    </>
  );
}
