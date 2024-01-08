import React from "react";
import Nav from "../Pages/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Main;
