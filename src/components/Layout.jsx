// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { SearchProvider } from "./SearchContext";

const Layout = () => {
  return (
    <SearchProvider>
      <div className="layout-container">
        <Header />
        <main className="contentlay">
          <Outlet />
        </main>
        <Footer />
      </div>
    </SearchProvider>
  );
};

export default Layout;
