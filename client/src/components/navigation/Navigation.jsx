import { Link, NavLink, useNavigate } from "react-router-dom";
import Search from "../search/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Container } from "./navbar";
import { useDispatch, useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import { NavDropdown } from "react-bootstrap";
import ModalX from "../../utils/ModalX";
import { logout } from "../../features/user/userSlice";

const Navigation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);
  const userInfo = localStorage.getItem("user");
  const { user } = useSelector((state) => state.user);
  console.log(userInfo);

  const handleLogout = () => {
    dispatch(logout());
    navigate("login");
  };
  return (
    <Container>
      <div className="section">
        <div className="logo">
          <span onClick={() => navigate("/")}>MegaMart</span>
          <img
            src="https://seeklogo.com/images/W/walmart-spark-logo-57DC35C86C-seeklogo.com.png"
            alt="logo"
            height="40px"
            width="40px"
          />
        </div>
        <div className="category">
          <ModalX />
          <Link to="/services">Services</Link>
        </div>
        <div className="search">
          <Search />
        </div>
        <div className="account">
          <NavLink to="/wishlist">
            <FavoriteBorderOutlinedIcon />
            &nbsp;Wishlist
          </NavLink>
          {!userInfo ? (
            <NavDropdown title="Accounts" className="mainlink">
              <NavDropdown.Item className="dropdown">
                <NavLink to="/login">Sign In</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdown">
                <NavLink to="/register">Register </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item className="dropdown">
                <NavLink to="/accounts">Accounts</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <NavDropdown title={user.username}>
              <NavDropdown.Item className="dropdown">
                <button
                  style={{ backgroundColor: "rgb(0, 113, 220)" }}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </NavDropdown.Item>
            </NavDropdown>
          )}
          <NavLink to="/cart">
            <Badge badgeContent={cartItems.length} color="secondary">
              <LocalMallOutlinedIcon />
            </Badge>
            &nbsp;Bag
          </NavLink>
        </div>
      </div>
    </Container>
  );
};

export default Navigation;
