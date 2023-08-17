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
  colors: ProductPriceItemSizeDetail[];
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
