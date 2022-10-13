import { NavLink } from "react-router-dom";
import { Wrapper } from "./navbar";

const Header = () => {
  return (
    <Wrapper>
      <div className="section">
        <div className="delivery"></div>
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/electronics">Electronics</NavLink>
          <NavLink to="/clothing">Clothing</NavLink>
          <NavLink to="/store">Store</NavLink>
          <NavLink to="/megamart">megamart+</NavLink>
          <NavLink to="/covid">Covid 19 Kits</NavLink>
          <NavLink to="/technology">Technology</NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
