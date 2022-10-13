import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../productService/productService";

const initialState = {
  product: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

// fetch a single product
export const fetchProduct = createAsyncThunk(
  "/product/fetch",
  async (id, thunkAPI) => {
    try {
      return await getProduct(id);
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

const productDetailsSlice = createSlice({
  name: "product-details",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload;
        state.isError = false;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
