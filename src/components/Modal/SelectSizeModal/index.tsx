import { Bar } from "@/components/Bar";
import {
  Container,
  Mask,
  ModalHeader,
  CloseButton,
  SubmitButtonWrapper,
} from "./style";
import SelectProductSize from "@/components/SelectProductSize";
import SelectPoductQty from "@/components/SelectPoductQty";
import Button from "@components/Button/NormalButton";
import { close } from "@/redux/slices/productSelectSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectProductSelect } from "@/redux/slices/productSelectSlice";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export default function SelectSizeModal() {
  const { data } = useSelector(selectProductSelect);
  if (!data) return null;
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: data.id,
      name: data.name,
      size: undefined,
      color: undefined,
      qty: 1,
    },
  });

  useEffect(() => {
    setValue("color", undefined);
  }, [watch("size")]);

  const onSubmit = (data: any) => {
    console.log(data);
  };
  // console.log(errors);
  return (
    <>
      <Mask />
      <Container onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>
          <div className="Mheader__img">
            <img src="./images/800x.webp" alt="" />
          </div>
          <div className="Mheader__content">
            <p className="Mheader__content--name">{data.name}</p>
            <p className="Mheader__content--price">
              <span>$</span>
              3999
            </p>
          </div>
          <CloseButton onClick={() => dispatch(close())} />
        </ModalHeader>
        <Bar />
        <SelectProductSize
          options={data.options}
          register={register}
          sizeValue={watch("size")}
        />
        <Bar />
        <SelectPoductQty
          register={register}
          setValue={setValue}
          value={watch("qty")}
        />
        <SubmitButtonWrapper>
          <Button isActive={true}>{data.action}</Button>
        </SubmitButtonWrapper>
      </Container>
    </>
  );
}
