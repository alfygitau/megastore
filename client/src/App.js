import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Cart from "./pages/cart/Cart";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import LandingPage from "./pages/landing/LandingPage";
import Login from "./pages/Login";
import ProductDetails from "./pages/products-details/ProductDetails";
import Register from "./pages/register/Register";
import Store from "./pages/store/Store";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/store" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/:category" element={<Category />} />

          {/* protected routes */}
          <Route element={<ProtectedRoutes />}>
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
