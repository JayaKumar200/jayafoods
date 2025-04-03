import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import food from "../assets/instamat.png";
import { FiMenu, FiX, FiShoppingCart, FiSearch } from "react-icons/fi";

const Navbar = ({ cartItems = [], homeCount = 0, search, setSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      if (window.innerWidth > 480) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
    setSearch(searchQuery);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 shadow-md z-50 flex justify-between items-center px-6 py-4 md:px-12 transition-all">

      {/* Logo & Search */}
      <div className="flex items-center space-x-3">
        <Link to="/" className="flex items-center space-x-2">
          <img src={food} alt="JK Instamat Logo" className="h-10 md:h-14 transition-transform duration-300 hover:scale-105" />
          <h3 className="text-white text-lg md:text-xl font-bold tracking-wide">JK Instamat</h3>
        </Link>

        {/* Search Input (Desktop) */}
        <form onSubmit={handleSearch} className="relative hidden md:flex ml-6">
          <input
            type="text"
            placeholder="Search food..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none w-56"
          />
          <button type="submit" className="absolute right-3 top-2.5 text-yellow-400">
            <FiSearch className="text-xl" />
          </button>
        </form>
      </div>

      {/* Navigation Links - Desktop */}
      <div className="hidden md:flex items-center space-x-6 text-white font-medium text-lg">
        <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
        <Link to="/offers" className="hover:text-yellow-400 transition">Offers</Link>
        <Link to="/signin" className="hover:text-yellow-400 transition">Sign In</Link>
        <Link to="/cart" className="relative hover:text-yellow-400 transition flex items-center">
          <FiShoppingCart className="mr-1" /> Cart ({cartItems.length + homeCount})
        </Link>
        <Link to="/admin" className="hover:text-yellow-400 transition">Admin</Link>
      </div>

      {/* Mobile Search (beside logo) */}
      {isMobile && (
        <form onSubmit={handleSearch} className="relative flex md:hidden items-center">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500 focus:outline-none w-40"
          />
          <button type="submit" className="absolute right-3 top-2.5 text-yellow-400">
            <FiSearch className="text-xl" />
          </button>
        </form>
      )}

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center">
        {menuOpen ? (
          <FiX className="text-white text-3xl cursor-pointer" onClick={() => setMenuOpen(false)} />
        ) : (
          <FiMenu className="text-white text-3xl cursor-pointer" onClick={() => setMenuOpen(true)} />
        )}
      </div>

      {/* Mobile Sidebar Menu */}
      {menuOpen && isMobile && (
        <div className="fixed top-0 left-0 bg-white text-black flex flex-col items-start justify-start pt-20 pl-6 space-y-6 text-lg font-semibold z-50 w-3/4 h-full shadow-lg transition-all">
          {/* Close Button */}
          <FiX className="absolute top-6 right-6 text-3xl cursor-pointer" onClick={() => setMenuOpen(false)} />

          {/* Links */}
          <Link to="/" className="hover:text-yellow-500 transition" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/offers" className="hover:text-yellow-500 transition" onClick={() => setMenuOpen(false)}>Offers</Link>
          <Link to="/signin" className="hover:text-yellow-500 transition" onClick={() => setMenuOpen(false)}>Sign In</Link>
          <Link to="/cart" className="hover:text-yellow-500 transition flex items-center" onClick={() => setMenuOpen(false)}>
            <FiShoppingCart className="mr-2" /> Cart ({cartItems.length + homeCount})
          </Link>
          <Link to="/admin" className="hover:text-yellow-500 transition" onClick={() => setMenuOpen(false)}>Admin</Link>

          {/* Close Button (Optional) */}
          <button className="mt-6 px-6 py-2 bg-yellow-500 rounded-lg text-black text-lg hover:bg-yellow-400 transition" onClick={() => setMenuOpen(false)}>Close</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
