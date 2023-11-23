import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import Add from './pages/Add';
import Feedback from './pages/feedback';
import Product from './pages/product';
import User from './pages/user';
// import Contact from './pages/Contact';
import Contact from './pages/Contact';
// import Page from './users/Page1';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/adduser" element={<AddUser/>}/>
        <Route exact path="/edituser/:id" element={<EditUser />} />
        <Route exact path="/viewuser/:id" element={<ViewUser />} />
        <Route exact path="/add" element={<Add />} />
        <Route exact path="/con" element={<Contact />} />
        <Route exact path="/feed" element={<Feedback />} />
        <Route exact path="/pro" element={<Product />} />
        <Route exact path="/user" element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
