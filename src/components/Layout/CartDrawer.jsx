import React from "react";

const CartDrawer = ({ drawerOpen, toggleDrawer }) => {
  return (
    <>
      {/* Background Overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={toggleDrawer}
        ></div>
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

        <div className="flex-1 p-4 overflow-y-auto">
          <p className="text-gray-600">Your cart is empty...</p>
        </div>

        <button
          onClick={toggleDrawer}
          className="p-4 bg-gray-900 text-white font-semibold mt-auto"
        >
          Close
        </button>
      </div>
    </>
  );
};

export default CartDrawer;
