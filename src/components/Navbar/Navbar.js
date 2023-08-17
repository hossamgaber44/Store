import "./Navbar.css";
import { useState } from "react";
import {NavLink , Link , useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Navbar = () => {
  const navigate=useNavigate()
  useEffect(()=>{
   let email = sessionStorage.getItem('email');
   if(email==='' ||email===null){
    navigate('/login')
   }
},[])

    const {CardItems} = useSelector(state => state.cart);

    const [toggle,setToggle] = useState(false);
  return (
   <div className="nav-bar">
     <div className="container">
     <div className="header">
      <div className="nav-icon">
        <h1><span>S</span>tore</h1>
      </div>
       <nav style={{ right: toggle && "0" }} className="navbar">
        <div className="navbar-close-icon">
        <i onClick={() => setToggle(false)} className="fa-solid fa-x"></i>
        </div>
        <ul className="navbar-links">
        <Link to="/" onClick={() => setToggle(false)} className="navbar-link">
           Home
        </Link>
        <NavLink to="/phones" onClick={() => setToggle(false)} className="navbar-link">
           Phones
        </NavLink>
        <Link to="/laptops" onClick={() => setToggle(false)} className="navbar-link">
           Laptops
        </Link>
        <Link to="/handPhones" onClick={() => setToggle(false)} className="navbar-link">
          Hand Phones
        </Link>
        <Link to="/accessoires" onClick={() => setToggle(false)} className="navbar-link">
          Accessoires
        </Link>
        <Link to="/login" onClick={() => setToggle(false)} className="navbar-link">
          sin up
        </Link>
      </ul>
       </nav>
       <Link to="/card" className="middle-header-shopping-cart">
        <i className="fa-solid fa-cart-shopping cart-icon"></i>
        {CardItems.length > 0 && (
          <span className="cart-notification">{CardItems.length}</span>
        )}
      </Link>
    <div onClick={() => setToggle(true)} className="top-header-menu">
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
     </div>
   </div>
  );
};

export default Navbar
