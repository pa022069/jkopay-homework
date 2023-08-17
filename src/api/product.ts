import axios from "axios";

export const getProductList = async () => {
  const response = await axios({
    method: "GET",
    url: "http://localhost:4002/list",
  });
  return response.data;
}

export const postProductItem = async (data: any) => {
  const response = await axios({
    method: "POST",
    url: "http://localhost:4002/item",
    data
  });
  return response.data;
}