import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCategoryProducts } from "../productService/productService";

const initialState = {
  productsOfCategory: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const getCategoryProducts = createAsyncThunk(
  "/products/category/get",
  async (category, thunkAPI) => {
    try {
      return await fetchCategoryProducts(category);
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

export const productsOfCategorySlice = createSlice({
  name: "productscategory",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategoryProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategoryProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.productsOfCategory = action.payload;
        state.isError = false;
      })
      .addCase(getCategoryProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = productsOfCategorySlice.actions;
export default productsOfCategorySlice.reducer;
