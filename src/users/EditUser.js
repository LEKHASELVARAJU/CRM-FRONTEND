import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    cid:"",
    name: "",
    email: "",
    phno: "",
    address:"",
  });

  const { cid,name, email,phno,address } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/id/${id}`, user);
    navigate("/add");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/get/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row" >
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow" style={{backgroundColor:"#a17d85"}}>
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-2">
              <label htmlFor="Name" className="form-label">
                Id
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter ID"
                name="cid"
                value={cid}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
              <div className="mb-2">
              <label htmlFor="Username" className="form-label">
                Phno
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Phone Number"
                name="phno"
                value={phno}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="Username" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            </div>
            <button type="submit" className="btn btn-primary my-2">
              Submit
            </button>
            
            <Link className="btn btn-danger mx-2" to="/add">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}