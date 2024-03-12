import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen flex-col">
      <Header />

      <main className="p-8 h-full flex flex-col gap-8">{children} </main>
      <p>footer</p>
    </div>
  );
};

export default Layout;
