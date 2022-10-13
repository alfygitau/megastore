import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../features/cart/cartSlice";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  return (
    <Container>
      <div className="cart">
        <div className="cart-content">
          <Card
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "10px",
            }}
          >
            <div className="title">
              <p>My Cart</p>
            </div>
            <h4>{cartItems?.length}&nbsp; Items</h4>
            {cartItems &&
              cartItems.map((product) => (
                <Card sx={{ width: "100% " }}>
                  <CardContent>
                    <p>Arrives by Mon, Aug 8</p>
                    <Divider light />
                    <span className="alert">Sold and shipped by VIPOUTLET</span>
                    <div className="product">
                      <div className="img">
                        <img src={product?.image} alt="product" />
                      </div>
                      <div className="description">
                        <p>{product?.name}</p>
                      </div>
                      <div className="price">
                        <span>
                          {product?.price?.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </span>
                      </div>
                    </div>
                    <Divider light />
                    <div className="links-buttons">
                      <Link to="/save">Save for later</Link>
                      <p onClick={() => handleRemoveFromCart(product)}>
                        Remove
                      </p>
                    </div>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              ))}
          </Card>
        </div>
        <div className="cart-buttons">
          <Card sx={{ width: "100% " }}>
            <CardActions>
              <button>Continue to checkout</button>
            </CardActions>
            <Divider light />
            <CardContent>
              <div className="subtotal">
                <p>Subtotal({cartItems.length}&nbsp;Items)</p>
                <span>
                  {cartItems
                    .reduce((a, cv) => a + cv.price, 0)
                    .toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                </span>
              </div>
              <div className="taxes">
                <p>Taxes</p>
                <span>Calculated at checkout</span>
              </div>
              <Divider light />
              <div className="total">
                <p>Estimated Total</p>
                <span>
                  {cartItems
                    .reduce((a, cv) => a + cv.price, 0)
                    .toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  width: 100%;
  height: 100%;
  .cart {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    gap: 20px;
    margin-top: 20px;
    .cart-content {
      display: flex;
      flex: 7;
      flex-direction: column;
      margin-bottom: 40px;
      .title {
        background-color: rgb(242, 248, 253);
        height: 60px;
        color: black;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
      }
      hr {
        margin-bottom: 10px;
      }
      .links-buttons {
        display: flex;
        align-items: center;
        a {
          margin-right: 15px;
          color: black;
        }
        p {
          text-decoration: underline;
          cursor: pointer;
        }
      }
      .product {
        display: flex;
        margin-top: 10px;
        margin-bottom: 10px;
        .img {
          display: flex;
          flex: 2;
          justify-content: center;
          img {
            height: 100px;
            width: 100px;
          }
        }
        .description {
          display: flex;
          flex: 5;
        }
        .price {
          display: flex;
          flex: 2;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .cart-buttons {
      display: flex;
      flex: 3;
      height: fit-content;
      button {
        padding: 7px;
        background-color: rgb(0, 113, 220);
        color: white;
        border: none;
        width: 100%;
        outline: none;
        border-radius: 30px;
        font-size: 18px;
        font-family: "BOGLEREGULAR";
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .subtotal {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .taxes {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .total {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
`;
