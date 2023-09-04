import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
export default function Navbar() {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark "
   
    style={{backgroundColor:'#a17d85',
    padding:'0.1cm'
    }}
>
  {/* #601a1a45 */}
  <div className ="container-fluid  t">
    {/* <Link className="navbar-brand  btn btn-outline-secondary" style={{color:"black",backgroundColor:"white"}} href="#" to={"/page"}
    >Page</Link> */}
    <span style={{paddingLeft:'80px'}}></span>
    <Link class="navbar-brand  h1 p-2" to={"/"} style={{fontSize:'28px' ,fontStyle:'oblique',textAlign:'center'}}>Customer Information</Link>
    
    <Link className="btn btn-outline-dark border-2" to="/adduser"
    style={{fontSize:'18px'}}>Customer Registration

    </Link>
    </div>
</nav>

    </div>
  )
}
