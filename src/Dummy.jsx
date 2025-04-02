// import React from "react";
// import { Link } from "react-router-dom";
// import food from '../assets/instamat.png'
// import "./Navbar.css";

// const Navbar = ({cartItems=[],setHomeCount,homeCount,search,setSearch}) => {
//   return (
//     <header className="header">
//     <Link to='/Admin'>
//       <h3 className='admin'>Admin:)</h3>
//     </Link>
//       <Link to="/" className="logo-container">
//         <img
//           src={food}
//           alt="JK Instamat Logo"
//           className="logo"
//         />
//         <h3>JK Instamat</h3>
//       </Link>


//       <div className="search-container">
//       <Link to='/search'> 
//         <input type="text" 
//         placeholder="Search for food..." 
//         className="search-bar"
//         value={search}
//         onChange={(e)=> setSearch(e.target.value)} />
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/751/751463.png"
//           alt="Search Icon"
//           className="icon search-icon"
//         />
//         </Link>
//       </div>

//       <nav className="nav-links">
//         <Link to="/offers" className="menu-item">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/726/726496.png"
//             alt="Offer Icon"
//             className="icon"
//           />
//           <span>Offers</span>
//         </Link>

//         <Link to="/signin" className="menu-item">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/747/747376.png"
//             alt="Sign In Icon"
//             className="icon"
//           />
//           <span>Sign In</span>
//         </Link>

//         <Link to="/cart" className="menu-item cart-section">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
//             alt="Cart Icon"
//             className="icon cart-icon"
//           />
//           <span className="cart-text">Cart:({cartItems ?.length || 0 +homeCount})</span>
//         </Link>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;






























import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import food from "../assets/instamat.png";
import "./Navbar.css";

const Navbar = ({ cartItems = [], homeCount, products = [] }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

  // Toggle menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle("menu-open", !menuOpen);
  };

  // Navigate to the menu when dots are clicked
  const handleDotsClick = () => {
    setMenuOpen(true); // Open the menu instead of navigating
  };

  // Close menu when clicking outside
  const closeMenu = (e) => {
    if (e.target.classList.contains("menu-overlay")) {
      setMenuOpen(false);
      document.body.classList.remove("menu-open");
    }
  };

  // Handle search and filter products
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter products that match the query
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );

    setFilteredProducts(filtered);
  };

  return (
    <>
      {/* Navbar Header */}
      <div className="navbar-container">
        <Link to="/" className="logo-container">
          <img src={food} alt="JK Instamat Logo" className="logo" />
        </Link>

        {/* 3-Dots Button (Visible Only on Small Screens) */}
        <div className="menu-icon" onClick={handleDotsClick}>
          &#x22EE;
        </div>
      </div>

      {/* Full-Screen Menu Overlay */}
      <div className={`menu-overlay ${menuOpen ? "open" : ""}`} onClick={closeMenu}>
        <h3 className="jk-instatitle">JK Instamat</h3>

        {/* Search Bar Inside the Menu */}
        <div className="search-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search food..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>

        {/* Show Filtered Products */}
        <div className="search-results">
          {filteredProducts.map((product) => (
            <div key={product.id} className="search-item">
              {product.name}
            </div>
          ))}
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link to="/" className="menu-item" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/offers" className="menu-item" onClick={toggleMenu}>
            Offers
          </Link>
          <Link to="/signin" className="menu-item" onClick={toggleMenu}>
            Sign In
          </Link>
          <Link to="/cart" className="menu-item cart-section" onClick={toggleMenu}>
            Cart: ({cartItems.length + homeCount})
          </Link>
          <Link to='/admin' className='menu-item'>
          Admin
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

