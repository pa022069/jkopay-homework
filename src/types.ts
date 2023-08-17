export interface ArticleType {
  title: string;
  content: string;
}

export interface ProductPriceItemSizeDetail {
  id: string;
  color: string;
  stock: number;
  price: number;
  originPrice?: number;
}

export interface ProductPriceItemSize {
  id: string;
  size: string;
  price?: number;
  originPrice?: number;
  stock?: number;
  colors?: ProductPriceItemSizeDetail[];
}

export interface ImageInfo {
  src: string;
  alt: string;
}

export interface ProductPriceItem {
  id: string;
  name: string;
  images: ImageInfo[];
  tags?: string[];
  about?: ArticleType[];
  detail?: string[];
  price: ProductPriceItemSize[];
}

export interface StoreListType {
  storeName: string;
  itemList: ProductPriceItem[];
}

export interface IProductSelectData {
  id: string;
  name: string;
  image: ImageInfo;
  options: ProductPriceItemSize[];
  action: string;
  [key: string]: any;
}
