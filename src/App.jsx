import {useState} from 'react';
import Navbar from './components/Navbar.jsx';
 import Main from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import Offer from './pages/Offer.jsx';
import SignIn from './pages/SignIn.jsx';
import Login from './pages/Login.jsx';
import Admin from './components/Admin.jsx';
import Search from './components/Search.jsx';
import { Routes, Route } from 'react-router-dom';

const App = () => {
const [userName, setUserName] = useState("")
const  [homeCount,setHomeCount]=useState(0)
  const [search, setSearch] = useState("");
 const [cartItems, setCartItems] = useState([
    { id: 1, name: "Pizza", price: 12.99, image: "pizza.jpg", quantity: 1 },
    { id: 2, name: "Burger", price: 8.99, image: "burger.jpg", quantity: 1 },
    { id: 3, name: "Pasta", price: 10.99, image: "pasta.jpg", quantity: 1 },
  ]);
  return (
    <div>
      <Navbar cartItems={cartItems}  homeCount={homeCount} setHomeCount={setHomeCount} search={search} setSearch={setSearch}/>
      <Routes>
        <Route path="/" element={<Main homeCount={homeCount} setHomeCount={setHomeCount} />} />
        <Route path="/cart" element={<Cart  cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/offers" element={<Offer />} />
        <Route path="/signin" element={<SignIn setUserName={setUserName} userName={userName}/>} />
        <Route path='/login' element={<Login  userName={userName}/>} />
        <Route  path='/admin' element={<Admin />}/>
        <Route  path='/search' element={<Search search={search} setSearch={setSearch} />}/>
      </Routes>
    </div>
  );
};

export default App;
