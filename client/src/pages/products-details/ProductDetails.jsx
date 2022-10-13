import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  fetchProduct,
  reset,
} from "../../features/product/productDetails/productDetailsSlice";
import styled from "styled-components";
import Divider from "@mui/material/Divider";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import KeyboardReturnOutlinedIcon from "@mui/icons-material/KeyboardReturnOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { addToCart } from "../../features/cart/cartSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [adding, setAdding] = useState(false);
  const { id } = useParams();
  const { product, isError, isLoading, message, isSuccess } = useSelector(
    (state) => state.product
  );
  const {  isSuccess: isSuccessCart } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(fetchProduct(id));
    return () => {
      dispatch(reset());
      setAdding(false)
    };
  }, [id, dispatch, isError, message]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAdding(true);
  };

  return (
    <Container>
      <div className="product-info">
        <div className="content">
          <div className="img">
            <img src={product?.image} alt="product" />
          </div>
          <div className="description">
            <p>About this item</p>
            <Divider light />
            <p>{product?.description}</p>
          </div>
        </div>
        <div className="sidecard">
          <Link to="/brand">{product?.brand}</Link>
          <p>{product?.name}</p>
          <span>{product?.numReviews}&nbsp;Reviews</span>
          <p>
            {product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
          <span>Prices may vary online, in stores, and in-app</span>
          <button onClick={() => handleAddToCart(product)}>
            {adding
              ? "Adding..."
              : isSuccessCart
              ? "Item added to cart.."
              : "Add To Cart"}
          </button>
          <Divider light />
          <div className="shipping">
            <LocalShippingOutlinedIcon />
            <span>
              Free shipping. Want it faster? Add an address to see options
            </span>
          </div>
          <div className="company">
            <StorefrontOutlinedIcon />
            <span>Sold and shipped by ur1Stop | BiznusSoft Inc.</span>
          </div>
          <div className="return">
            <KeyboardReturnOutlinedIcon />
            <span>Free 30-Day returns. See Details</span>
          </div>
          <Divider light />
          <div className="wish">
            <div className="wishlist">
              <FavoriteBorderOutlinedIcon />
              <Link to="/wishlist">Add to wishlist</Link>
            </div>
            ||
            <div className="registry">
              <CardGiftcardOutlinedIcon />
              <Link to="/wishlist">Add to registry</Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;

const Container = styled.div`
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  font-family: "BOGLEREGULAR";
  .product-info {
    display: flex;
    /* border: 1px solid black; */
    height: 600px;
    width: 100%;
    margin-top: 20px;
    gap: 10px;
    .content {
      display: flex;
      flex: 7;

      flex-direction: column;
      .img {
        display: flex;
        flex: 3;
        border: 1px solid black;
        border-bottom: none;
        justify-content: center;
        img {
          height: 320px;
          width: 320px;
          object-fit: cover;
        }
      }
      .description {
        display: flex;
        flex: 3;
        border: 1px solid black;
        flex-direction: column;
        padding: 10px;
        p {
          font-weight: bold;
        }
      }
    }
    .sidecard {
      display: flex;
      flex: 3;
      border: 1px solid black;
      flex-direction: column;
      padding: 20px;
      a {
        color: black;
      }
      button {
        padding: 5px;
        background-color: rgb(0, 113, 220);
        color: white;
        width: 200px;
        border: none;
        outline: none;
        border-radius: 30px;
        font-size: 18px;
        font-family: "BOGLEREGULAR";
        margin-bottom: 20px;
        margin-top: 20px;
      }
      .shipping {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        margin-top: 10px;
        span {
          margin-left: 10px;
        }
      }
      .company {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        span {
          margin-left: 10px;
        }
      }
      .return {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        span {
          margin-left: 10px;
        }
      }
      .wish {
        display: flex;
        margin-top: 20px;
        gap: 20px;
        .wishlist {
          display: flex;
          align-items: center;
          a {
            margin-left: 10px;
            color: black;
          }
        }
        .registry {
          display: flex;
          align-items: center;
          a {
            margin-left: 10px;
            color: black;
          }
        }
      }
    }
  }
`;
