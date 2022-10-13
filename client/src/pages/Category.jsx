import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts } from "../features/product/productsOfCategories/productsOfCategorySlice";
import ProductCard from "../components/cards/ProductCard";

const Category = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  console.log(category);

  const { productsOfCategory } = useSelector((state) => state.categoryProducts);

  useEffect(() => {
    dispatch(getCategoryProducts(category));
  }, [category, dispatch]);

  return (
    <Container>
      <Wrapper>
        <p>{category}</p>
        <div className="content">
          {productsOfCategory.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>
      </Wrapper>
    </Container>
  );
};

export default Category;

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  .content {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    /* border: 1px solid black; */
    padding: 10px;
    justify-content: center;
  }
  p {
    text-transform: capitalize;
  }
`;
