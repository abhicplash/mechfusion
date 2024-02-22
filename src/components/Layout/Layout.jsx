import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="bg-[#ecf8f9] overflow-x-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
