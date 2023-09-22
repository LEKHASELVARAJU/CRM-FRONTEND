import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Make an API request to fetch product data when the component mounts
    axios
      .get('http://localhost:8080/getprod') // Replace with your API endpoint
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleBuyClick = (productId) => {
    // Find the product by ID
    const productToAdd = products.find((product) => product.bid === productId);

    // Add the product to the cart
    setCart([...cart, productToAdd]);

    // Set a message indicating that the item has been added to the cart
    setMessage(`Item "${productToAdd.bname}" has been added to the cart.`);

    // Clear the message after 10 seconds
    setTimeout(() => {
      setMessage('');
    }, 1000); // 10 seconds in milliseconds
  };

  const handleRemoveFromCart = (productId) => {
    // Remove the product from the cart based on its ID
    const updatedCart = cart.filter((item) => item.bid !== productId);
    setCart(updatedCart);
  };

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
                <button
                  className="btn btn-danger mx-4"
                  onClick={() => handleBuyClick(product.bid)}
                >
                  Buy
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {message && <div className="alert alert-success">{message}</div>}

      {/* Render the Cart component */}
      <Cart cartItems={cart} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
}

// Cart component to display cart items
function Cart({ cartItems, onRemoveFromCart }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.bid}>
              {item.bname} - ${item.price.toFixed(2)}
              <button
                className="btn btn-danger mx-4"
                onClick={() => onRemoveFromCart(item.bid)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div>
          {/* Add checkout or other cart-related actions here */}
          {/* <button>Checkout</button> */}
        </div>
      )}
    </div>
  );
}

export default ProductList;
