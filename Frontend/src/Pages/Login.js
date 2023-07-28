// import React from "react";

// import '../Pages/Login.css';
// import { Link } from "react-router-dom";


// function Login(){
//     return(
//       <div id="bb">

//           <div class="container">
//             <input type="checkbox" id="check"/>
//             <div class="login form">
//               <header>Login</header>
//               <form action="#">
//                 <input type="text" placeholder="Enter your email"/>
//                 <input type="password" placeholder="Enter your password"/>
//                 <a href="#">Forgot Password?</a>
//                 <Link to="/Home"><input type="button" class="button" value="Login"/></Link>
//               </form>
//               <div class="signup">
//                 <span class="signup">Don't have an account?
//                 <label for="check">Sign Up</label>
//                 </span>
//               </div>
//             </div>
//             <div class="registration form">
//               <header>Sign Up</header>
//               <form action="#">
//                 <input type="password" placeholder="Enter your BranchId"/>
//                 <input type="text" placeholder="Enter your Email"/>
//                 <input type="password" placeholder="Enter your password"/>
                /* <input type="button" class="button" value="Sign Up"/> */
              /* </form>
              <Link to="/Home"><input type="button" class="button" value="Sign Up"/></Link>
              <div class="signup">
                <span class="signup">Already have an account?
                  <label for="check">Login</label>
                </span>
              </div>
            </div>
        </div>
      </div>
    );
}
export default Login; */


// frontend/Login.js

import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter valid login credentials.');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Password is short');
      alert('Password is short');
      return;
    }
    try {
      const response = await axios.post('http://127.0.0.1:8081/api/v1/auth/authenticate', {
        email,
        password,
      });

      navigate('/home');

      let token = response.data.token;
      let user = response.data.userResponse;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
      console.error('Error: ', error);
      setErrorMessage('Password is Incorrect');
    }
    // navigate('/home');
  };

  return (
      <div className="sign">
        <form className="signup-form" onSubmit={handleLogin}>
          <h2>Login</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <input
            className="in"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="in"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br/>
          <div className='logbtn'>
              <button className="b2">Login</button>
          </div>
          <div className='newpage'>
            <h3 id="aaaa">New User?<Link to='/signup'><a>Register here!</a></Link></h3>
          </div>
          <br/>
        </form>
      </div>
  );
}

export default Login;