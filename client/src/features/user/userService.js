import axios from "axios";

const API_URL = "http://localhost:5000/api/auth/register";
const API_LOGIN_URL = "http://localhost:5000/api/auth/login";

export const createUser = async (user) => {
  const response = await axios.post(API_URL, user);
  console.log(response)
  return response.data;
};

export const signIn = async (user) => {
  const response = await axios.post(API_LOGIN_URL, user);
  console.log(response)
  return response.data;
};
