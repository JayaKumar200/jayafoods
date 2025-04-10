import React from "react";
import { useNavigate } from "react-router-dom"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import{useDispatch} from 'react-redux';
import {setIncrease} from '../slice/Slice';
const Offer = () => {
  const bannerOffers = [
    { id: 1, img: "", title: "Flat 50% OFF on Burgers!" },
    { id: 2, img: "", title: "Buy 1 Get 1 Free on Pizza!" },
    { id: 3, img: "", title: "Free Fries with Every Meal!" },
  ];

  const dispatch = useDispatch();

  const offerDispatch = useDispatch();

  const featuredDeals = Array.from({ length: 200 }, (_, index) => ({
    id: index + 1,
    name: `Deal ${index + 1}`,
    price: Math.floor(Math.random() * 500) + 100,
    discount: Math.floor(Math.random() * 100) + 50,
  }));

  const coupons = [
    { code: "FOOD50", description: "Get ₹50 OFF on orders above ₹299" },
    { code: "PIZZA99", description: "Flat ₹99 OFF on Large Pizzas" },
    { code: "BURGER20", description: "Save 20% on Burgers Today" },
  ];

  const navigate = useNavigate();

  const handleAddToCart = (offer) => {
    navigate("/cart");
    dispatch(setIncrease())

  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  pagination={{ clickable: true }}
  autoplay={{ delay: 3000 }}
  className="rounded-lg overflow-hidden shadow-md mt-10"
>
  {bannerOffers.map((offer) => (
    <SwiperSlide key={offer.id} className="bg-red-500 text-white text-center p-10 text-xl font-bold">
      {offer.title}
    </SwiperSlide>
  ))}
</Swiper>


      <h2 className="text-xl font-bold mt-6">⏳ Limited Time Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {featuredDeals.slice(0, 3).map((deal) => (
          <div key={deal.id} className="p-4 bg-white shadow-lg rounded-lg text-center">
            <h3 className="font-semibold">{deal.name}</h3>
            <p className="text-red-500 font-bold">₹{deal.price - deal.discount}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-6">🔥 200+ Featured Deals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {featuredDeals.map((deal) => (
          <div key={deal.id} className="p-4 bg-gray-100 rounded-lg shadow hover:scale-105 transition-all">
            <h3 className="text-lg font-semibold">{deal.name}</h3>
            <p className="text-gray-700"><span className="line-through">₹{deal.price}</span> ₹{deal.price - deal.discount}</p>
            <button onClick={handleAddToCart} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add to Cart</button>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mt-6">🎉 Discount Coupons</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {coupons.map((coupon, index) => (
          <div key={index} className="p-4 bg-yellow-100 rounded-lg shadow text-center">
            <h3 className="text-lg font-bold">{coupon.code}</h3>
            <p>{coupon.description}</p>
            <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offer;
