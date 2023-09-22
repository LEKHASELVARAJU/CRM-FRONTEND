import React from 'react';
import { SocialIcon } from 'react-social-icons'
const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p style={{fontSize:"30px"}}>If you have any questions or feedback, please feel free to contact us using the form below or the provided contact information.
        <br></br><br></br>  <b >Address : </b>5/99,BK Nagar,Mumbai-009
        <br></br><b>Phone No : </b>9442558749&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <br></br><b>Email : </b>lekhaselvaraju@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <br></br>
       <br></br>
      <SocialIcon url="https://twitter.com" bgColor='black'  />
      &nbsp;&nbsp;&nbsp;
      <SocialIcon   url="https://instagram.com" bgColor='black'  />
      &nbsp;&nbsp;&nbsp;
      <SocialIcon url="https://facebook.com"bgColor='black'   />
        </p>
        
      </div>
      
    
  );
};

export default Contact;
