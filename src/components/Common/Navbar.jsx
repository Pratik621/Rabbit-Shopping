import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiOutlineArrowDownRight,
} from "react-icons/hi2";
import Searchbar from "./Searchbar";
import CartDrawer from "../Layout/CartDrawer";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <nav className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            MyWebsite
          </Link>
        </div>

        {/* Navigation Links */}
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
          <Link
            to="/profile"
            className="flex items-center space-x-1 hover:text-gray-800"
          >
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>

          <button onClick={toggleDrawer} className="relative hover:text-gray-800">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 -right-2 bg-red-600 text-xs rounded-full text-white h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>

          <Searchbar />

          <button className="md:hidden hover:text-gray-800">
            <HiOutlineArrowDownRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>

      <CartDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navbar;
