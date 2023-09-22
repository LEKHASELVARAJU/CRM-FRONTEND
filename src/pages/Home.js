import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1>Welcome to LP solutions</h1>
          
      <p style={{fontSize:"20px"}}>
        We're glad to have you here! We're dedicated to providing you with the best experience possible. Whether you're a first-time visitor or a long-time customer, we're committed to serving your needs and making your time with us enjoyable.
      </p>

      <h2>
        <Link to={"/pro"} style={{color:'black'}}>Discover Our Products and Services</Link></h2>
      <p>
        Explore our wide range of products and services designed to cater to your needs. From high-quality products to exceptional services, we've got you covered. Feel free to browse our website and discover what we have in store for you.
      </p>

      

      <h2>Stay Connected</h2>
      <p>
        Join our community and stay connected with us. 
        <Link to={"/adduser"}>Sign up </Link>for our newsletter to receive updates, special offers, and exclusive content. Follow us on social media to be a part of our growing online family.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any inquiries or need assistance, we're just a click away. Feel free to
        <Link to={"/con"}>contact</Link>  us via email, phone, or through our online contact form. We're here to help and look forward to hearing from you.
      </p>

     
          <div className="text-center">
            <Link to="/add" className="btn btn-primary">
              View Customers
            </Link>
            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
