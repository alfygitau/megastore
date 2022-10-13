import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/product/products/productsSlice";
import productReducer from "../features/product/productDetails/productDetailsSlice";
import cartReducer from "../features/cart/cartSlice";
import userReducer from "../features/user/userSlice";
import categoryReducer from "../features/product/category/categorySlice"
import productsCategoryReducer from "../features/product/productsOfCategories/productsOfCategorySlice"
import brandReducer from "../features/product/brands/brandSlice"

export const store = configureStore({
  reducer: {
    products: productsReducer,
    product: productReducer,
    cart: cartReducer,
    user: userReducer,
    categories: categoryReducer,
    categoryProducts: productsCategoryReducer,
    brands: brandReducer,
  },
});
