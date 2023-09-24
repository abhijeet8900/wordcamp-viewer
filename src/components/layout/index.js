import React from "react";
import Header from "../header";

const Layout = ({ children }) => {
  return (
    <div className="w-full h-full max-w-6xl mx-auto">
      <Header />
      <div className="flex gap-x-2 max-h-[720px]">{children}</div>
    </div>
  );
};

export default Layout;
