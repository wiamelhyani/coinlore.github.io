import React from "react";
import NavBar from "../components/shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

const MasterPage = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <div>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MasterPage;
