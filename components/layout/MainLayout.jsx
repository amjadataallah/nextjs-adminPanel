"use client";

import React, { useContext } from "react";
import MainHeader from "./layout-sections/MainHeader";
import { MenuContext } from "@/context/MenuContext";
import MainSidebar from "./layout-sections/MainSidebar";

const MainLayout = ({ children }) => {
  const { open, toggle } = useContext(MenuContext);


  return (
    <div className="bg-green-100 min-h-screen">
      <MainSidebar />.
      <div className={`${open ? "max-lg:blur-xl" : "blur-0"}`}>
        <MainHeader />
        <main className="lg:ml-72">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
