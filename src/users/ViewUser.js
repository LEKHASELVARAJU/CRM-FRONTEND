import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
export default function ViewUser() {
  const { id } = useParams();
  const [user, setUser] = useState({
    id:"",
    name: "",
    email: "",
    phno: "",
    address:"",
  });

 

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/get/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row" >
        <div className="col-md-6 offset-md-3 border rounded p-4  shadow" style={{backgroundColor:"#a17d85"}}>
          <h2 className="text-center m-4">User Details</h2>

          <div className="card" style={{backgroundColor:"white"}}>
            <div className="card-header">
              <ul className="list-group list-group-flush" style={{ display: 'flex', flexDirection: 'column' }}>
                <li className="list-group-item" style={{ display: 'flex', alignItems: 'center' }}>
                  <b style={{fontFamily:"cursive"}}>Customer Id:&nbsp;</b>
                  
                  {user.id}
                </li>
                <li className="list-group-item" style={{ display: 'flex', alignItems: 'center' }}>
                  <b style={{fontFamily:"cursive"}}>Name:&nbsp;</b>
                  {/* <span style={{ color: 'blue', fontWeight: 'bold' }}> */}
                  {user.name}
                  {/* </span> */}
                </li>
                <li className="list-group-item" style={{ display: 'flex', alignItems: 'center' }}>
                  <b style={{fontFamily:"cursive"}}>Email:&nbsp;</b>
                  {user.email}
                </li>
                <li className="list-group-item" style={{ display: 'flex', alignItems: 'center' }}>
                  <b style={{fontFamily:"cursive"}}>Phone Number:&nbsp;</b>
                  {user.phno}
                </li>
                <li className="list-group-item" style={{ display: 'flex', alignItems: 'center' }}>
                  <b style={{fontFamily:"cursive"}}>Address:&nbsp;</b>
                  {user.address}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}