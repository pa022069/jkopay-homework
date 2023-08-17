import axios from "axios";

export const getProductList = async () => {
  const response = await axios({
    method: "GET",
    url: "https://jeffrey-work.com/list",
  });
  return response.data;
}

export const postProductItem = async (data: any) => {
  const response = await axios({
    method: "POST",
    url: "https://jeffrey-work.com/item",
    data
  });
  return response.data;
}