import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import './Home.css';

export default function Home() {
  const [users, setUsers] = useState([]);
//   const { cid } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); 

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:8080/');
    const res=await axios.get("http://localhost:8080/sort");
    setUsers(result.data);
    setUsers(res.data);
  };

  const deleteUser = async (cid) => {
    await axios.delete(`http://localhost:8080/del/${cid}`);
    loadUsers();
  };

  // Calculate the start and end indices for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container">
      <div className="py-4"
       >
        

        <table className="table border caption-top">
          <caption style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', fontSize: '30px' }}>
            List of Customers
          </caption>
          <thead className="table-dark" style={{ fontSize: '18px' }}>
            <tr>
              <th scope="col">Customer ID</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone No</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phno}</td>
                <td>{user.address}</td>
                <td>
                  <Link className="btn btn-primary mx-4" to={`/viewuser/${user.id}`}>
                    View
                  </Link>
                  <Link className="btn btn-outline-secondary mx-4 green button" to={`/edituser/${user.id}`}>
                    Edit
                  </Link>
                  <button className="btn btn-danger mx-4" onClick={() => deleteUser(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="table" style={{ textAlign: 'center' }}>
            <tr>
              <td colSpan="6" style={{ fontSize: '20px', fontWeight: 'bold', fontStyle: 'italic' }}>
                Thank you for viewing the customer list
              </td>
            </tr>
          </tfoot>
        </table>

        <div className="pagination">
          <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}
          style={{color:"black",fontSize:'20px',fontWeight:'bold'}}
          >
            Previous
          </button>
          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={indexOfLastItem >= users.length}
           style={{color:"black",fontSize:'20px',fontWeight:'bold'}}
          >
            Next
          </button>
        </div>

        <div className="page-number"
         style={{color:"black",fontSize:'20px',fontWeight:'bold'}}
        >
          Page {currentPage} of {Math.ceil(users.length / itemsPerPage)}
        </div>
      </div>
    </div>
  );
}
