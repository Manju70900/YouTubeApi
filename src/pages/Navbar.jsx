import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";

const Navbar = () => {
  return (
    <section className="bg-white h-[70px] shadow-sm ">
      <article className="flex item-center w-[95%] m-auto h-[70px]">
        <Logo />
        <Search />
        <Menu />
      </article>
    </section>
  );
};

export default Navbar;
