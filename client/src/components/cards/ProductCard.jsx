import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <Section>
      <div className="img">
        <img
          src={product.image}
          alt="product"
          onClick={() => navigate(`/products/${product._id}`)}
        />
      </div>
      <div className="btn">
        <button onClick={() => handleAddToCart(product)}>+ Add</button>
      </div>
      <span>
        {product.price.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </span>
      <p>{product.name}</p>
    </Section>
  );
};

export default ProductCard;

const Section = styled.div`
  height: 520px;
  width: 350px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  .img {
    height: 300px;
    width: 300px;
    display: flex;
    /* border: 1px solid black; */
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      cursor: pointer;
    }
  }
  .btn {
    margin-left: 10px;
    display: flex;
    width: 100%;
    button {
      padding: 5px;
      background-color: rgb(0, 113, 220);
      color: white;
      border: none;
      outline: none;
      width: 80px;
      border-radius: 30px;
      font-size: 18px;
      font-family: "BOGLEREGULAR";
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
  span {
    width: 100%;
    margin-left: 10px;
    font-weight: bold;
    margin-top: 10px;
  }
  p {
    margin-left: 10px;
  }
`;
