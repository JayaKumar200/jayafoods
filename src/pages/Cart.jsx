import React from "react";

const Cart = ({ cartItems, setCartItems }) => {
  const handleQuantityChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const deliveryCharge = totalPrice > 0 ? 5 : 0;
  const grandTotal = totalPrice + deliveryCharge;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 animate-fadeIn">
          Your Cart
        </h2>
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500 animate-fadeIn">
            Your cart is empty 😞
          </p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition"
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        -
                      </button>
                      <span className="text-gray-800 font-medium">{item.quantity}</span>
                      <button
                        className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 transition"
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="bg-red-400 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-gray-50 p-4 rounded-lg shadow-md animate-slideUp">
              <p className="text-lg font-semibold text-gray-800">Total: <span className="text-gray-700">${totalPrice.toFixed(2)}</span></p>
              <p className="text-lg font-semibold text-gray-800">Delivery: <span className="text-gray-700">${deliveryCharge.toFixed(2)}</span></p>
              <h3 className="text-xl font-bold text-gray-900 mt-2">Grand Total: <span className="text-green-600">${grandTotal.toFixed(2)}</span></h3>
              <button
                className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg mt-4 hover:bg-blue-600 transition transform hover:scale-105"
                onClick={() => alert("Your Payment is On Process!")}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
