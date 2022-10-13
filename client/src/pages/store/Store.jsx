import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  reset,
} from "../../features/product/products/productsSlice";
import styled from "styled-components";
import ProductCard from "../../components/cards/ProductCard";
import { getBrands } from "../../features/product/brands/brandSlice";
import skeleton from "../../utils/skeleton";
import SkeletonX from "../../utils/skeleton";

const Store = () => {
  const dispatch = useDispatch();

  const { isLoading, isError, isSuccess, message, products } = useSelector(
    (state) => state.products
  );

  const { brands } = useSelector((state) => state.brands);
  console.log(brands);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getBrands());
    dispatch(fetchProducts());
    // return () => {
    //   dispatch(reset());
    // };
  }, [isError, message, dispatch]);

  if (isLoading) {
    return (
      <SkeletonWrapper>
        <SkeletonX />
        <SkeletonX />
        <SkeletonX />
        <SkeletonX />
        <SkeletonX />
        <SkeletonX />
      </SkeletonWrapper>
    );
  }

  return (
    <Container>
      <p>The complete Store</p>
      <p>Popular Brands</p>
      <div className="brands">
        {brands.map((brand, index) => (
          <div className="box" key={index}>
            <span>{brand}</span>
          </div>
        ))}
      </div>
      <div className="wrapper">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </Container>
  );
};

export default Store;

const Container = styled.div`
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  .wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  .brands {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    gap: 10px;
    align-items: center;
    justify-content: center;
    .box {
      height: 40px;
      width: fit-content;
      border: 1px solid black;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      padding: 10px;
    }
  }
`;

const SkeletonWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  /* border: 1px solid black; */
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;
