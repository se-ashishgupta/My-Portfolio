import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header, { HeaderPhone } from "../layout/Header";
import Footer from "./Footer";

const Layout = ({ user }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Outlet />
      <Footer user={user} />
    </>
  );
};

export default Layout;
