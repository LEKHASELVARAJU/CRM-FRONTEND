import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark "
   
    style={{backgroundColor:'#a17d85',
    padding:'0.1cm'
    }}
>
<Link to="/con" className="btn btn-secondary ml-2 " style={{backgroundColor:"black"}}>
              Contact
            </Link>
  {/* <div className ="container-fluid  t"> */}
  <div  style={{ padding: '10px' }}>
    <Link  to="/feed" style={{'color':"black",padding: '25px'}}>FEEDBACK</Link></div>

    <Link to="/user" style={{'color':"black",paddingRight: '5cm'}}>USER LOGIN</Link>
    <Link class="navbar-brand  h1 p-2" to={"/"} style={{fontSize:'28px' ,fontStyle:'oblique'}}>LP CRM APPLICATION</Link>
    <div style={{paddingLeft:'5cm'}}>
    <Link className="btn btn-outline-dark border-2" to="/adduser"
    style={{fontSize:'18px'}}>Customer Registration

    </Link></div>
    {/* </div> */}
</nav>

    </div>
  )
}
