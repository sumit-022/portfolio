import React from "react";
import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const navlinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Services", path: "/services" },
    { title: "Contact", path: "/contact" },
  ];
  return (
    <div className=" absolute min-h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('./assets/images/background.jpg')]">
      <Header navlinks={navlinks} />
      <main className="px-8">{children}</main>
    </div>
  );
};

export default Layout;
