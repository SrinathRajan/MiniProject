import React from "react";
import './Pages/Home.css';
import { Link } from "react-router-dom";


function Home(){
    return(
     
    <div className="navbar">
            <h2>Logistics Management System</h2>
            <div className="nav">
             <Link to="/About" className="About">
                <h2>About</h2>
             </Link>
             <Link to="/Contact" className="Contact">
                <h2>Contact</h2>
             </Link>
             <Link to="/Shop" className="Shop">
                <h2>Shop</h2>
             </Link>
             <Link to="/" className="Logout">
                <h2>Logout</h2>
             </Link>

            </div>
        </div>
 
      
        // <nav>
        // <ul>
        //  <li>
        // <a href="#"> About Us </a>
        // </li>
        // <li>
        // <a href="#"> Contact Us </a>
        // </li>
        // <li> <a href="#"> Product Details </a>
        // </li>
        /* <li>
        <a href="#"> Join Us </a>
        </li>  */
        // </ul>
        // </nav> 
        // <h1>Welcome To Home Page</h1>
       
    
    );

}
export default Home;


    