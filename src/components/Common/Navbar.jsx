import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiOutlineBars3,
  HiOutlineXMark,
} from "react-icons/hi2"; // ✅ Updated icons
import { IoMdClose } from "react-icons/io";
import Searchbar from "./Searchbar";
import CartDrawer from "../Layout/CartDrawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);

  return (
    <>
      {/* Main Navbar */}
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link to="#" className="hover:text-gray-700 uppercase">
            Men
          </Link>
          <Link to="#" className="hover:text-gray-700 uppercase">
            Women
          </Link>
          <Link to="#" className="hover:text-gray-700 uppercase">
            Topwear
          </Link>
          <Link to="#" className="hover:text-gray-700 uppercase">
            Bottomwear
          </Link>
        </div>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          {/* Profile Icon */}
          <Link to="/profile" className="hover:text-gray-800">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>

          {/* Cart Icon */}
          <button onClick={toggleDrawer} className="relative hover:text-gray-800">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 -right-2 bg-red-600 text-xs rounded-full text-white h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>

          {/* 🔍 Searchbar + ☰ Mobile Nav Toggle Group */}
<div className="flex items-center gap-2">
  <Searchbar />

  <button
    onClick={toggleNavDrawer}
    className="md:hidden hover:text-gray-800 transition flex-shrink-0"
  >
    {navDrawerOpen ? (
      <HiOutlineXMark className="h-6 w-6 text-gray-700" />
    ) : (
      <HiOutlineBars3 className="h-6 w-6 text-gray-700" />
    )}
  </button>
</div>

        </div>
      </nav>

      {/* Cart Drawer */}
      <CartDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />

      {/* Mobile Nav Drawer */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg transform transition-transform duration-300 z-40 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b font-semibold text-lg flex justify-between items-center">
          <span className="text-xl">Menu</span>
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        <div className="flex flex-col p-4 space-y-4">
          <Link
            to="#"
            onClick={toggleNavDrawer}
            className="text-gray-800 hover:text-gray-600 uppercase"
          >
            Men
          </Link>
          <Link
            to="#"
            onClick={toggleNavDrawer}
            className="text-gray-800 hover:text-gray-600 uppercase"
          >
            Women
          </Link>
          <Link
            to="#"
            onClick={toggleNavDrawer}
            className="text-gray-800 hover:text-gray-600 uppercase"
          >
            Topwear
          </Link>
          <Link
            to="#"
            onClick={toggleNavDrawer}
            className="text-gray-800 hover:text-gray-600 uppercase"
          >
            Bottomwear
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
