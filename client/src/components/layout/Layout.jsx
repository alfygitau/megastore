import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../navigation/Header";
import Navigation from "../navigation/Navigation";

const Layout = () => {
  return (
    <>
      <header>
        <Navigation />
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
