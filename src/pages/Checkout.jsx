import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userRequest } from '../requestMethods';

const Checkout = () => {
  const cart = useSelector((state) => state.cart.products);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create an array of product IDs
      const productIds = cart.map((product) => product._id);

      // Send data to MongoDB using your API endpoint
      const response = await userRequest.post('http://localhost:5000/checkout', {
        name,
        address,
        pincode,
        products: productIds,
      });

      // Assuming the server responds with a success message
      console.log(response.data.message);

      // Redirect to success page or any other page
      history.push('/success');
    } catch (error) {
      console.error('Error submitting details:', error);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        {cart.map((product) => (
          <div key={product._id}>
            <p>{product.title}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </label>
        <br />
        <label>
          Pincode:
          <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
