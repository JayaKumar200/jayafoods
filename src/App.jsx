import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Main from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Offer from "./pages/Offer.jsx";
import SignIn from "./pages/SignIn.jsx";
import Login from "./pages/Login.jsx";
import Admin from "./components/Admin.jsx";
import Search from "./components/Search.jsx";

const App = () => {
  const [userName, setUserName] = useState("");
  const [search, setSearch] = useState("");
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Pizza", price: 12.99, image: "pizza.jpg", quantity: 1 },
    { id: 2, name: "Burger", price: 8.99, image: "burger.jpg", quantity: 1 },
    { id: 3, name: "Pasta", price: 10.99, image: "pasta.jpg", quantity: 1 },
  ]);

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar
        cartItems={cartItems}
        search={search}
        setSearch={setSearch}
      />
      

      <main className="max-w-6xl mx-auto p-4 md:p-8">
        <Routes>
          <Route
            path="/"
            element={<Main/>}
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route path="/offers" element={<Offer />} />
          <Route
            path="/signin"
            element={<SignIn />}
          />
          <Route path="/login" element={<Login  />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="/search"
            element={<Search search={search} setSearch={setSearch} />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
