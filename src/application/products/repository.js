
import axios from "axios";


export const getLocalProducts = () => {
  return axios.get("guest/home/products");
}


export const getGlobalProduct = () => {
  return axios.get("guest/home/products-global");
}