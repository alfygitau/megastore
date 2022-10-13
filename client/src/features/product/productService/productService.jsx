import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export const fetchAllProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getProduct = async (id) => {
  const response = await axios.get(`${API_URL}/find/${id}`);
  return response.data;
};

export const addProductToCart = async (id) => {
  const response = await axios.get(`${API_URL}/find/${id}`);
  return response.data;
};

export const fetchCategories = async () => {
  const response = await axios.get(`${API_URL}/categories`);
  return response.data;
};

export const fetchCategoryProducts = async (category) => {
  const response = await axios.get(`${API_URL}/${category}`);
  return response.data;
};

export const fetchBrands = async () => {
  const response = await axios.get(`${API_URL}/brands`);
  return response.data;
};
