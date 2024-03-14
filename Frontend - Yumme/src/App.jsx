import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/ui/button";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="w-full h-screen flex flex-col gap-8 bg-white">
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
