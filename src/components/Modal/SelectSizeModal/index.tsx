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
import { addItem } from "@/redux/slices/shoppingCartSlice";
import { useForm } from "react-hook-form";
import { Fragment, memo, useCallback, useEffect } from "react";
import {
  formatCurrency,
  getMinMaxPriceFromIProductSelectData,
} from "@/utils/helper";
import { toast } from "react-toastify";
import _ from "lodash";

function SelectSizeModal() {
  const { data } = useSelector(selectProductSelect);
  const minMaxPrice = getMinMaxPriceFromIProductSelectData(data, "options");
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      id: data.id,
      name: data.name,
      size: undefined,
      color: undefined,
      qty: 1,
    },
  });

  const sizeValue = watch("size");
  const colorValue = watch("color");

  // Action
  const onSubmit = (_data: any) => {
    if (data.action !== "加入購物車") {
      toast.success("商品已購入 !", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 1000,
      });
      return;
    }
    dispatch(addItem(_.pickBy(_data, _.identity)));
    dispatch(close());
    toast.success("商品已放入購物車 !", {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar: true,
      autoClose: 1000,
    });
  };
  const getProductData = useCallback(() => {
    const findSizeIndex: number = sizeValue
      ? data.options.findIndex((item) => item.size === sizeValue)
      : 0;
    if (!sizeValue && !colorValue)
      return {
        id: data.id,
        price: 0,
      };
    if (data.options[findSizeIndex].colors !== undefined) {
      const findColorIndex: number = colorValue
        ? data.options[findSizeIndex].colors.findIndex(
          (item) => item.color === colorValue
        )
        : 0;
      return data.options[findSizeIndex].colors[findColorIndex];
    }
    return data.options[findSizeIndex];
  }, [data, sizeValue, colorValue]);

  // Effect
  useEffect(() => {
    setValue("color", undefined);
  }, [sizeValue, setValue]);
  useEffect(() => {
    setValue("id", getProductData().id);
    setValue("qty", 1);
  }, [sizeValue, colorValue, setValue, getProductData]);

  if (!data) return null;

  return (
    <>
      <Mask onClick={() => dispatch(close())} />
      <Container onSubmit={handleSubmit(onSubmit)}>
        <ModalHeader>
          <div className="Mheader__img">
            <img src={data.image.src} alt={data.image.alt} />
          </div>
          <div className="Mheader__content">
            <p className="Mheader__content--name">{data.name}</p>
            <div className="Mheader__content--price">
              {getProductData().price ? (
                <>
                  <span className="icon">$</span>
                  {formatCurrency(getProductData().price || 0)}
                </>
              ) : (
                minMaxPrice.map((item: number, index: number) => (
                  <Fragment key={item}>
                    {index !== 0 && <span className="dash">-</span>}
                    <span className="icon">$</span>
                    {formatCurrency(item)}
                  </Fragment>
                ))
              )}
            </div>
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
          maxQty={getProductData().stock}
        />
        <SubmitButtonWrapper>
          <Button isActive={true} disabled={!isValid}>
            {data.action}
          </Button>
        </SubmitButtonWrapper>
      </Container>
    </>
  );
}

export default memo(SelectSizeModal);
