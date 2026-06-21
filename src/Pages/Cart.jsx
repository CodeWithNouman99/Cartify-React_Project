import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItem,
    removeFromCart,
    updateQuantity,
  } = useCart();

  const navigate = useNavigate()

  // total
  const subtotal = cartItem.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const shipping = cartItem.length ? 10 : 0;
  const total = subtotal + shipping;

  // empty cart
  if (cartItem.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold">Cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-6">
        My Cart ({cartItem.length})
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {/* ITEMS */}
        <div className="md:col-span-2 space-y-4">
          {cartItem.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border p-4 rounded"
            >
              {/* product info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.images?.[0] || item.image}    // kue k images of array he
                  className="w-16 h-16 object-cover"
                  alt=""
                />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p>${item.price}</p>
                </div>
              </div>

              {/* quantity */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    updateQuantity(index, Math.max(1, (item.quantity || 1) - 1))
                  }
                  className="px-3 border"
                >
                  -
                </button>

                <span>{item.quantity || 1}</span>

                <button
                  onClick={() =>
                    updateQuantity(index, (item.quantity || 1) + 1)
                  }
                  className="px-3 border"
                >
                  +
                </button>
              </div>

              {/* remove */}
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* SUMMARY */}
        <div className="border p-4 rounded h-fit">
          <h2 className="text-xl font-bold mb-4">Summary</h2>

          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shipping}</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button onClick={() => navigate("/products")} className="w-full mt-4 bg-black text-white py-2">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;