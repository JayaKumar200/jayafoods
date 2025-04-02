import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Navbar from "../components/Navbar.jsx";
import "./Home.css";
import {useNavigate} from 'react-router-dom'
import pizza from "../assets/pizza.jpg";
import premium from "../assets/premium.jpg";
import sushi from "../assets/sushi.jpg";
import hamburger from "../assets/hamburger.jpg";
import chicken from "../assets/chicken.jpg";
import baiq from "../assets/baiq-daling-ykThMylLsbY-unsplash.jpg";
import brooke from "../assets/brooke-lark-jUPOXXRNdcA-unsplash.jpg";
import design from "../assets/design4business-xnxS_he76E4-unsplash.jpg";
import devin from "../assets/devin-avery-5iRgh_G0eRY-unsplash.jpg";
import eilliv from "../assets/eiliv-aceron-1pqxHp0dYyA-unsplash.jpg";
import aceron from "../assets/eiliv-aceron-uAm1CZMdPCw-unsplash.jpg";
import food from "../assets/food-photographer-jennifer-pallian-8pUjhBm4cLw-unsplash.jpg";
import george from "../assets/george-zheng-0Kbjfwunink-unsplash.jpg";
import irene from "../assets/irene-kredenets-6unxGRCPg0U-unsplash.jpg";
import kavita from "../assets/kavita-joshi-rai-lE5O9DktAQY-unsplash.jpg";
import khloe from "../assets/khloe-arledge-ND3edEmzcdQ-unsplash.jpg";
import lilas from "../assets/lilas-yohane-14jmOnCcZkU-unsplash.jpg";
import vicky from "../assets/vicky-ng-KsmkVW0Hsv0-unsplash.jpg";

const Home = ({setHomeCount,homeCount}) => {
  const messages = useRef([
    "👋 Welcome to JK Instamat! Your favorite meals, delivered fresh & fast! 🚀🍔",
    "Hey there, foodie! 🍕 Craving something delicious? We’ve got you covered! 😋",
    "🎉 Welcome to JK Instamat! First-time users get 10% OFF on their first order! 🍔🎊",
    "🚀 Hungry? Let’s Fix That! Order now & enjoy delicious meals at your doorstep! 🍕🍟",
    "✨ Happy Birthday! Celebrate with a feast! 🎊 Order now & enjoy special discounts! 🎁",
    "🥂 Welcome to JK Instamat – Where Taste Meets Excellence! Indulge in gourmet flavors today! 🍽️",
  ]);

  const [content, setContent] = useState(messages.current[0]);
  const scrollRef = useRef(null);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % messages.current.length;
      setContent(messages.current[index]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const foodItems = useMemo(() => [
    { img: baiq, name: "Idly" },
    { img: brooke, name: "Fruit Salad" },
    { img: chicken, name: "Fried Chicken" },
    { img: design, name: "Croissant" },
    { img: devin, name: "Tea" },
    { img: eilliv, name: "Burger" },
    { img: aceron, name: "Egg Roast" },
    { img: food, name: "Fish" },
    { img: george, name: "Fish Fry" },
    { img: irene, name: "Salad" },
    { img: kavita, name: "Momos" },
    { img: khloe, name: "Fish Mix" },
    { img: lilas, name: "Chicken" },
    { img: vicky, name: "Doughnut" },
  ], []);

  const scrollByAmount = 300;

  const navigate = useNavigate();

  const scrollLeft = useCallback(() => {
    scrollRef.current.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
  }, []);

  const scrollRight = useCallback(() => {
    scrollRef.current.scrollBy({ left: scrollByAmount, behavior: "smooth" });
  }, []);

   const handleCart = (item) => {
    navigate("/cart", { state: { selectedItem: item } });
    setHomeCount(homeCount + 1)
  };

  return (
    <div className="container">
      <Navbar />
      
      <h2 className="content">{content}</h2>
      
      <h2 className="mind">What's on Your Mind?</h2>

      <div className="gallery-container">
        <button className="arrow left" onClick={scrollLeft}>&#8592;</button>
        <div className="step1" ref={scrollRef}>
          {foodItems.map((item, index) => (
            <div key={index} className="food-item">
              <img src={item.img} alt={item.name} loading="lazy" />
              <p className="foodName">{item.name}</p>
              <button onClick={()=> handleCart(item)}>Click to Cart</button>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={scrollRight}>&#8594;</button>
      </div>

      <h2 className="discover">Explore More Delicacies</h2>
      <div className="food-gallery">
        {[pizza, premium, sushi, chicken, hamburger].map((foodImg, index) => (
          <div key={index} className="food-card">
            <img src={foodImg} alt="Food" className="food-img" />
          </div>
        ))}
      </div>

           <div className="map-section">
        <h3>📍 Our Location: Chennai</h3>
        <iframe
          title="Chennai Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15530.580222981822!2d80.2707181!3d13.0826802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265d27f20e8d3%3A0x2a0c0a49983e357b!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711891387364!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen
          loading="lazy"
        ></iframe>
        </div>
      <footer className="footer">
        <p>© {new Date().getFullYear()} JK Instamat. All Rights Reserved.</p>
        <p>Disclaimer: JK Instamat is an independent food delivery service and is not affiliated with other platforms.</p>
      </footer>
    </div>
  );
};

export default Home;