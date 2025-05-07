


import axios from "axios";

export const apiCreateProduct = (data) => {
  return axios.post("", data);
}

export const apiPatchProduct = (data) => {
  return axios.patch("", data);
}

export const apiDeleteProduct = (data) => {
  return axios.delete("", data);
}