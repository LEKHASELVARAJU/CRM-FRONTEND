import React,{useState} from 'react'
import {  useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function AddUser() {
    let navigate = useNavigate();
    const [user, setUser] = useState({
        id: "",
        name: "",
        email: "",
        phno:"",
        address:"",
      });
    
      const {cid,name, email,phno,address } = user;
    
      const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };
      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/", user);
        navigate("/add");
      };
  return (
    // <div className="container" 
    // >
      
        <div className="row"
        style={{backgroundImage:`url("https://cdn.pixabay.com/photo/2016/06/25/12/52/laptop-1478822_1280.jpg")`,
        minHeight:'100px',
        // minWidth:'80vh',
        width:'100.9%',
        backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
    }}
        >
          <div style={{padding:'5px'}}>
          </div>
            <div className="col-md-5 offset-md-3 border rounded p-2 mt-7 shadow"
            style={{backgroundImage:`url("https://cdn.pixabay.com/photo/2015/08/01/18/48/flowers-870557_1280.jpg")`,
            minHeight:'83vh',
        
          
            // minWidth:'90vh',
            // backgroundRepeat: 'no-repeat',
           //  width:"100%"
              // backgroundSize: 'cover',
        }}
            
            
            >
                <h2 className="text-center m-3">Customer Registration</h2>

                <form onSubmit={(e)=>onSubmit(e)}>

           <div className="mb-1">
            <label htmlFor="id" className="form-label">
            <b style={{ fontFamily: 'Tahoma, sans-serif' }}>
              Customer ID</b></label>
            <input type={"text"} className="form-control"
            placeholder="Enter ID"
            name="id"
            value={cid}
            onChange={(e)=>onInputChange(e)}
           required />
           </div>
           <div className="mb-1">
            <label htmlFor="name" className="form-label">
            <b style={{ fontFamily: 'Tahoma, sans-serif' }}>Name</b>
              </label>
            <input type={"text"} className="form-control"
            placeholder="Enter Name"
            name="name"
            value={name}
            onChange={(e)=>onInputChange(e)}
            required
            />
           </div>
           <div className="mb-1">
            <label htmlFor="email" className="form-label">
            <b style={{ fontFamily: 'Tahoma, sans-serif' }}>Customer Email</b></label>
            <input type={"text"} className="form-control"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e)=>onInputChange(e)}

            />
           </div>
           <div className="mb-1">
            <label htmlFor="phno" className="form-label">
              <b style={{ fontFamily: 'Tahoma, sans-serif' }}>Customer Phone Number</b></label>
            <input type={"text"} className="form-control"
            placeholder="Enter Phone No"
            name="phno"
            value={phno}
            onChange={(e)=>onInputChange(e)}
            required

            />
           </div>
           <div className="mb-1">
            <label htmlFor="address" className="form-label">
            <b style={{ fontFamily: 'Tahoma, sans-serif' }}>Customer Address</b>
              </label>
            <input type={"text"} className="form-control"
            placeholder="Enter Address"
            name="address"
            value={address}
            onChange={(e)=>onInputChange(e)}

            />
           </div>
           <div style={{paddingTop:'8px'}}></div>
           <button type="submit" className="btn btn-outline-primary" >Submit</button>
           {/* <Link className="btn btn-outline-primary mx-2" to="/add">Submit</Link> */}
           {/* <button type="submit" className="btn btn-outline-danger mx-3">Cancel</button> */}
           <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
           </form>
           
            </div><div style={{padding:'17px'}}>
        </div>
      </div>
  )
}
