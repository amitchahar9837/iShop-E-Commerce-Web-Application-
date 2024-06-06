import React from "react";
import DOWNARROW from "../../assets/images/SVGIcons/caret-down-solid.svg";
import BagIcon from "../../assets/images/SVGIcons/bag_icon.svg";
import SearchIcon from "../../assets/images/SVGIcons/search_icon.svg";
import LOGO from "../../assets/images/SVGIcons/iSHOP Logo.svg";
import HamBurger from "../../assets/images/SVGIcons/hamburger_icon.svg";
import DarkMode from "./DarkTheme";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const NavLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "store",
    path: "/store",
  },
  {
    id: 3,
    name: "iphone",
    path: "/iphone",
  },
  {
    id: 4,
    name: "ipad",
    path: "/ipad",
  },
  {
    id: 5,
    name: "macbook",
    path: "/macbook",
  },
  {
    id: 6,
    name: "accessories",
    path: "/accessories",
  },
];




const Header = () => {
  const data = useSelector((state) => state.cart);
  return (
    <div className="dark:bg-gray-900 dark:drop-shadow-[0px_1px_3px_rgba(255,255,255,0.6)] bg-neutral-50 dark:text-white duration-200 drop-shadow-md md:drop-shadow-none sticky top-0 left-0 z-10">
      <div className="p-2">
        <div className="md:container flex flex-col">
          {/* Navbar Top Section */}
          <div className="flex justify-between items-center">
            {/* Mobile Logo */}
            <Link
              to={"/"}
              className=" md:hidden flex justify-center items-center my-1"
            >
              <img src={LOGO} alt="" className="w-[100px] " />
            </Link>
            {/* Navabar Top-Left Section */}
            <div className=" hidden md:flex gap-8 items-center">
              <h2 className="flex gap-1 items-center font-bold">
                EN
                <img
                  src={DOWNARROW}
                  alt=""
                  className="w-[20px] h-[25px] cursor-pointer dark:invert "
                />
              </h2>
              <h2 className="flex gap-1 items-center font-bold">
                $
                <img
                  src={DOWNARROW}
                  alt=""
                  className="w-[20px] h-[25px] cursor-pointer dark:invert"
                />
              </h2>
              <DarkMode />
            </div>
            {/* Navabar Top-Right Section */}
            <div className="md:flex gap-8 items-center hidden">
              <Link to={"/login"} className="text-xl font-bold">
                Login
              </Link>
              <div className="flex gap-1 items-center font-bold">
                <Link to={'/cart'}>
                <img
                  src={BagIcon}
                  alt=""
                  className="w-[18px] h-[18px] cursor-pointer dark:invert"
                />
                </Link>
                <h3>{data.Qty} items</h3>
                <h3 className="text-gray-500 dark:text-gray-400">${data.TotalAmount[data.TotalAmount.length - 1]}</h3>
              </div>
              <img
                src={SearchIcon}
                alt=""
                className="w-[18px] h-[20px] cursor-pointer dark:invert"
              />
            </div>
            {/* Hamburger */}
            <img
              src={HamBurger}
              alt=""
              className="w-[22px] h-[22px] cursor-pointer dark:invert md:hidden block "
            />
          </div>
          {/* Logo */}
          <Link
            to={"/"}
            className=" hidden md:flex justify-center items-center my-1"
          >
            <img src={LOGO} alt="" className="w-[100px] " />
          </Link>
          {/* Nav Links */}
          <ul className="hidden md:flex justify-center items-center gap-6 my-2">
            {NavLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.path}
                  className="uppercase font-semibold text-lg hover:text-secondary"
                >
                  {link.name}{" "}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
