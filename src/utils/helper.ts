import { ProductPriceItemSize } from "@/types";

export const formatCurrency = (_value: number) =>
  new Intl.NumberFormat().format(_value);

export const getMinMaxPriceFromIProductSelectData = (
  productPriceItem: any,
  key: string
) => {
  let min = Infinity;
  let max = -Infinity;
  productPriceItem[key].forEach((size: ProductPriceItemSize) => {
    if (size.colors) {
      size.colors.forEach((color) => {
        if (color.price < min) {
          min = color.price;
        }
        if (color.price > max) {
          max = color.price;
        }
      });
    } else {
      if (size.price && size.price < min) {
        min = size.price;
      }
      if (size.price && size.price > max) {
        max = size.price;
      }
    }
  });
  if (min === max) {
    return [min];
  }
  return [min, max];
};

export const getMinMaxPrice = (data: any) => {
  let min = Infinity;
  let max = -Infinity;
  let minOrigin = Infinity;
  let maxOrigin = -Infinity;

  data.price.forEach((size: ProductPriceItemSize) => {
    if (size.colors) {
      size.colors.forEach((color) => {
        if (color.price < min) {
          min = color.price;
        }
        if (color.price > max) {
          max = color.price;
        }
        if (color.originPrice && color.originPrice < minOrigin) {
          minOrigin = color.originPrice;
        }
        if (color.originPrice && color.originPrice > maxOrigin) {
          maxOrigin = color.originPrice;
        }
      });
    } else {
      if (size.price && size.price < min) {
        min = size.price;
      }
      if (size.price && size.price > max) {
        max = size.price;
      }
      if (size.originPrice && size.originPrice < minOrigin) {
        minOrigin = size.originPrice;
      }
      if (size.originPrice && size.originPrice > maxOrigin) {
        maxOrigin = size.originPrice;
      }
    }
  });

  let price = min === max ? [min] : [min, max];
  let originPrice =
    minOrigin === maxOrigin ? [minOrigin] : [minOrigin, maxOrigin];
  return { price, originPrice };
};
