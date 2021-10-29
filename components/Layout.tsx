import React, { Children } from "react";
import Nav from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: any) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
