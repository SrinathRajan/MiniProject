// import React from "react";
// import '../Pages/Contact.css';
// import { Link } from "react-router-dom";

// function Contact(){
//     return(

//         <div>
//             <h1>Contact Us</h1>

//             <h2>Get In Touch With Us!!!</h2>
//             <p>We pride ourselves in providing you the best of our services. Please feel free to correspond to us through the following contact information:</p>
            
//             <h3>Address:  Aruna Towers,Athipalayam,Coimbatore North,Coimbatore,641110</h3>

//             <h3>Call Us: +91 93478 24725,+91 93478 24725</h3>
         
//              <h3>Email:  lmsgoods@gmail.com</h3>
//         </div>

//     );

// }
// export default Contact;
    

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Contact.css';

export default function Contact() {
  const [username, setUsername] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangeContact = (e) => {
    setContact(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="contact">
      <div className="contact1">
        <div className="contact2">
          <form onSubmit={handleSubmit}>
            <div className="input">
              <h1>Get In Touch</h1>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleChangeUsername}
              />
              <input
                type="text"
                placeholder="Contact Number"
                value={contact}
                onChange={handleChangeContact}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleChangeEmail}
              />
              <textarea name='textarea'
               placeholder="Enter your comments"
                rows={6}>
              </textarea>
                <Link to='/home'>
              <button className="btn" type="submit">
                Submit
              </button>
                </Link>
              
            </div>
          </form>
        </div>
      <footer>
      <h1>For More Information  Contact Us:</h1>
    <h1>Call: +91 9876598765, +91 9876556789.</h1>
    <h1>Email: lms@gmail.com, lmsgoods@gmail.com.</h1>
    <h1>Address:No.7,Aruna Towers,Athipalayam,
                Coimbatore North,
                Coimbatore,641110.</h1>
      </footer>
      </div>
    </div>
    
  );
}
