import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AddUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    phno: '',
    address: '',
  });

  const [submitted, setSubmitted] = useState(false); // State for submitted message

  const { id, name, email, phno, address } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/', user);

    setSubmitted(true); // Set submitted to true to display the message

    // Wait for a few seconds and then navigate to the home page
    setTimeout(() => {
      navigate('/');
    }, 2000); // 2000 milliseconds (2 seconds) delay
  };

  return (
    <div className="row">
      <div
        className="col-md-5 offset-md-3 border rounded p-2 mt-7 shadow"
        style={{
          backgroundImage: `url("https://cdn.pixabay.com/photo/2015/08/01/18/48/flowers-870557_1280.jpg")`,
          minHeight: '83vh',
        }}
      >
        <h2 className="text-center m-3">Customer Registration</h2>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="id" className="form-label">
              Customer ID
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter ID"
              name="id"
              value={id}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Customer Email
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phno" className="form-label">
              Customer Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Phone No"
              name="phno"
              value={phno}
              onChange={(e) => onInputChange(e)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Customer Address
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Address"
              name="address"
              value={address}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
          <Link className="btn btn-outline-danger mx-2" to="/">
            Cancel
          </Link>

          {submitted && (
            <div className="alert alert-success mt-3" role="alert">
              Submitted Successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
