import React from "react";

import '../Pages/Login.css';
import { Link } from "react-router-dom";


function Login(){
    return(
        <div class="container">
        <input type="checkbox" id="check"/>
        <div class="login form">
          <header>Login</header>
          <form action="#">
            <input type="text" placeholder="Enter your email"/>
            <input type="password" placeholder="Enter your password"/>
            <a href="#">Forgot Password?</a>
            <Link to="/Home"><input type="button" class="button" value="Login"/></Link>
          </form>
          <div class="signup">
            <span class="signup">Don't have an account?
             <label for="check">Sign Up</label>
            </span>
          </div>
        </div>
        <div class="registration form">
          <header>Sign Up</header>
          <form action="#">
            <input type="text" placeholder="Enter your email"/>
            <input type="password" placeholder="Create a password"/>
            <input type="password" placeholder="Confirm your password"/>
            {/* <input type="button" class="button" value="Sign Up"/> */}
          </form>
          <Link to="/Home"><input type="button" class="button" value="Sign Up"/></Link>
          <div class="signup">
            <span class="signup">Already have an account?
           <label for="check">Login</label>
            </span>
          </div>
        </div>
      </div>
    );
}
export default Login;
