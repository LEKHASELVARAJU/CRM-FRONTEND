import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import styled from "styled-components";
import './feedback.css'
const Feedback = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    const userEmail = form.current.user_email.value;
    console.log("User Email:", userEmail);
  
    emailjs
      .sendForm(
        "service_srxwi8s",
        "template_3sf01oo",
        form.current,
        "TIK0nqOXhQwnUZh2h",
        {
            user_email: userEmail, // Pass the user's email as a parameter
        }
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    
    // <StyledContactForm>
        
    <form ref={form} onSubmit={sendEmail} style={{paddingTop:"4%",backgroundImage:"https://cdn.pixabay.com/photo/2015/08/01/18/48/flowers-870557_1280.jpg"}}>
    <b style={{fontSize:"25px",paddingBottom:"2cm"}}>FEED BACK FORM</b>
    <div className="form-container" >
      <label htmlFor="user_name">Name</label>
      <input type="text" id="user_name" name="user_name" />
  
      <label htmlFor="user_email">Email</label>
      <input type="email" id="user_email" name="user_email" />
      <label htmlFor="product">Product ID</label>
      <input type="text" id="product" name="product" />
      <label htmlFor="product_name">Product Name</label>
      <input type="text" id="product_name" name="product_name" />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" />
  
      <input type="submit" value="Send" />
    </div>
  </form>
    // </StyledContactForm>
  );
};

export default Feedback;

