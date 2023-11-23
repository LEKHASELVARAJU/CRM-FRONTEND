import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);
  // const [message, setMessage] = useState('');

  useEffect(() => {
    // Make an API request to fetch product data when the component mounts
    axios
      .get('http://localhost:8080/getprod') // Replace with your API endpoint
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  

  return (
    <div>
      <h1>Product List</h1>
      <table className="table">
        <thead className="table-dark" style={{ fontSize: '18px' }}>
          <tr>
            <th scope="col">Product ID</th>
            <th scope="col">Product Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.bid}>
              <td>{product.bid}</td>
              <td>{product.bname}</td>
              <td>{product.des}</td>
              <td>{product.price}</td>
              <td>
              <Link className="btn btn-primary mx-4" to={"/feed"}>
                    Feedback
                  </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      
    </div>
  );
}

export default ProductList;
