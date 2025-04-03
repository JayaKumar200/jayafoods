import React from "react";
import pizza from "../assets/pizza.jpg";
import sushi from "../assets/sushi.jpg";
import hamburger from "../assets/hamburger.jpg";
import chicken from "../assets/chicken.jpg";
import devin from "../assets/devin-avery-5iRgh_G0eRY-unsplash.jpg";
import eilliv from "../assets/eiliv-aceron-1pqxHp0dYyA-unsplash.jpg";
import aceron from "../assets/eiliv-aceron-uAm1CZMdPCw-unsplash.jpg";
import irene from "../assets/irene-kredenets-6unxGRCPg0U-unsplash.jpg";
import khloe from "../assets/khloe-arledge-ND3edEmzcdQ-unsplash.jpg";
import lilas from "../assets/lilas-yohane-14jmOnCcZkU-unsplash.jpg";
import brooke from "../assets/brooke-lark-jUPOXXRNdcA-unsplash.jpg";

const Search = ({ search, setSearch }) => {
  const foodItems = [
    { name: "Pizza", price: "$120", image: pizza },
    { name: "Coffee", price: "$80", image: devin },
    { name: "Eilliv", price: "$120", image: eilliv },
    { name: "Sushi", price: "$150", image: sushi },
    { name: "Chicken", price: "$170", image: chicken },
    { name: "Aceron", price: "$90", image: aceron },
    { name: "Lilas", price: "$160", image: lilas },
    { name: "Khloe", price: "$120", image: khloe },
    { name: "Irene", price: "$150", image: irene },
    { name: "Brooke", price: "$140", image: brooke },
  ];

  const filteredFoods = foodItems.filter((food) =>
    food?.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-10 md:px-12">
      <h1 className="text-3xl font-bold text-center text-yellow-400 mb-6">
        Search for Food
      </h1>

      {/* Food List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{food.name}</h3>
              <p className="text-yellow-400 text-lg">{food.price}</p>
              <button className="mt-4 px-4 py-2 w-full bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-lg text-gray-300">
            No matching food found
          </p>
        )}
      </div>
    </div>
  );
};

export default Search;
