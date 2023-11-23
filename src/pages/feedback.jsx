import React, { useRef, useState } from "react";
// import StarRatings from 'react-star-ratings'; 
import emailjs from "@emailjs/browser";
import './feedback.css';

const Feedback = () => {
  const form = useRef();
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    
    const userEmail = form.current.user_email.value;

    emailjs
      .sendForm(
        "service_srxwi8s",
        "template_3sf01oo",
        form.current,
        "TIK0nqOXhQwnUZh2h",
        {
          user_email: userEmail,
         
        }
      )
      .then(
        (result) => {
          setFeedbackMessage('Feedback sent successfully');
          form.current.reset();
          setTimeout(() => {
            setFeedbackMessage('');
          }, 5000);
        },
        (error) => {
          setFeedbackMessage('Feedback sending failed');
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <b style={{ fontSize: "25px", paddingBottom: "2cm" }}>FEEDBACK FORM</b>
        <div className="form-container">
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
          
          {/* <label htmlFor="rating">Rating</label>
          <StarRatings
            rating={rating}
            starRatedColor="gold"
            changeRating={(newRating) => setRating(newRating)}
            name="rating"
          /> */}

          <input type="submit" value="Send" />
        </div>
      </form>
      {feedbackMessage && <div className="feedback-message">{feedbackMessage}</div>}
    </div>
  );
};

export default Feedback;
