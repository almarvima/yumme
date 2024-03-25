import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Toaster } from "@/components/ui/toaster";

/**
 * Layout component that represents the overall layout of the application.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The content to be rendered inside the layout.
 * @returns {JSX.Element} The rendered layout component.
 */
const Layout = ({ children }) => {
  return (
    <div className="flex lg:h-screen flex-col gap-8 ">
      <Header />
      <main className="container  flex flex-col  gap-8">{children}</main>
      <Toaster />
      <Footer />
    </div>
  );
};

export default Layout;
