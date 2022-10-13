import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Nav } from "rsuite";
import { getCategory } from "../features/product/category/categorySlice";

const ModalX = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <>
      <Nav appearance="default" style={{ backgroundColor: "rgb(0, 113, 220)" }}>
        <Nav.Menu title="Categories">
          {categories.map((category, index) => (
            <Nav.Item key={index}>
              <Link
                style={{ color: "black" }}
                to={`/${category.toLowerCase()}`}
              >
                {category}
              </Link>
            </Nav.Item>
          ))}
        </Nav.Menu>
      </Nav>
    </>
  );
};

export default ModalX;
