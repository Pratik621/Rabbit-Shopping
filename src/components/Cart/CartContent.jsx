import React, { useState } from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContent = () => {
  // 🛒 Initial cart data
  const [cartProducts, setCartProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      price: 29.99,
      quantity: 2,
      color: "Red",
      size: "M",
      image: "https://picsum.photos/200?random=1",
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      quantity: 1,
      color: "Yellow",
      size: "L",
      image: "https://picsum.photos/200?random=2",
    },
    {
      id: 3,
      name: "Product 3",
      price: 49.99,
      quantity: 3,
      color: "Blue",
      size: "S",
      image: "https://picsum.photos/200?random=3",
    },
  ]);

  // ➕ Increase quantity
  const increaseQty = (id) => {
    setCartProducts((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  };

  // ➖ Decrease quantity
  const decreaseQty = (id) => {
    setCartProducts((prev) =>
      prev.map((p) =>
        p.id === id && p.quantity > 1
          ? { ...p, quantity: p.quantity - 1 }
          : p
      )
    );
  };

  // 🗑️ Delete item
  const deleteItem = (id) => {
    setCartProducts((prev) => prev.filter((p) => p.id !== id));
  };

  // 💰 Calculate total
  const total = cartProducts
    .reduce((acc, p) => acc + p.price * p.quantity, 0)
    .toFixed(2);

  return (
    <div className="p-4 max-w-3xl mx-auto bg-white rounded-lg shadow">
      {cartProducts.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        cartProducts.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between mb-4 p-3 border-b border-gray-200 rounded-lg"
          >
            {/* 🖼 Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-16 h-16 object-cover rounded-md mr-3"
            />

            {/* 📋 Product Info */}
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-500">
                {product.color} | {product.size}
              </p>

              {/* 🔢 Quantity controls */}
              <div className="flex items-center mt-2">
                <button
                  onClick={() => decreaseQty(product.id)}
                  className="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
                >
                  -
                </button>
                <span className="px-3 py-1 bg-gray-100">
                  {product.quantity}
                </span>
                <button
                  onClick={() => increaseQty(product.id)}
                  className="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>

            {/* 💵 Price & Delete */}
            <div className="flex flex-col items-end">
              <span className="font-semibold text-gray-800 mb-1">
                ${(product.price * product.quantity).toFixed(2)}
              </span>
              <button
                onClick={() => deleteItem(product.id)}
                className="hover:text-red-700 transition"
              >
                <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-500" />
              </button>
            </div>
          </div>
        ))
      )}

      {/* 🧾 Total Summary */}
      {cartProducts.length > 0 && (
        <div className="mt-6 border-t pt-4 text-right">
          <p className="text-lg font-semibold text-gray-800">
            Total: ${total}
          </p>
          <button className="mt-3 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartContent;
