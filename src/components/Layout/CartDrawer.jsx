import React from "react";
import CartContent from "../Cart/CartContent";

const CartDrawer = ({ drawerOpen, toggleDrawer }) => {
  return (
    <>
      {/* Background Overlay */}
      {drawerOpen && (
        <div
  className="fixed inset-0 backdrop-blur-sm bg-black/20 z-30"
  onClick={toggleDrawer}
/>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-40 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b font-semibold text-lg flex justify-between items-center">
          <span>Your Cart</span>

          <button
            onClick={toggleDrawer}
            className="text-gray-500 hover:text-gray-800 text-xl"
          >
            ✕
          </button>
        </div>

        {/* <div className="flex-1 p-4 overflow-y-auto">
          <p className="text-gray-600">Your cart is empty...</p>
        </div> */}

        {/* <button
          onClick={toggleDrawer}
          className="p-4 bg-gray-900 text-white font-semibold mt-auto"
        >
          Close
        </button> */}
        <div className="flex-grow p-4 overflow-y-auto">
          <h2 className="text-xl font-semibold md-4 ">Your Cart</h2>
          {/* component for Cart*/ }
          <CartContent />

        </div>

        {/* Checkout Button */}
        <div className="p-4 bg-white sticky bottom-0"></div>
        <button className="w-full bg-black text-white py-3 rounded-lg font semibold hover:bg-gray transition">Checkout</button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">Shipping ,taxes and discount codes calculated at Checkout</p>
      </div>
    </>
  );
};

export default CartDrawer;
