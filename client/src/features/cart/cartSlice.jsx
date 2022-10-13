import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addProductToCart } from "../product/productService/productService";

const cartItems = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  cartItems: cartItems ? cartItems : [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// fetch product to push into the cart
export const addToCart = createAsyncThunk(
  "/cart/add",
  async (product, thunkAPI) => {
    try {
      return await addProductToCart(product._id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: (state) => initialState,
    removeFromCart: (state, action) => {
      console.log(action.payload);
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        let product = action.payload;
        const exist = state.cartItems.find((item) => item._id === product._id);
        if (exist) {
          state.cartItems = state.cartItems.map((x) =>
            x._id === exist._id ? product : x
          );
        } else {
          state.cartItems = [...state.cartItems, product];
        }
        localStorage.setItem("cart", JSON.stringify(state.cartItems));
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
