import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://clearspider.net/wp-content/uploads/2022/11/warehouse-management-system-wms-complete-guide.jpg")
    center;
background-size: cover;
display: flex;
flex-direction:column;
align-items: center;
justify-content: center;
`;

const DashboardTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 20px;
  font-color:teal;
  color: #333; /* Choose your desired text color */
`;

const Table = styled.table`
  border-collapse: collapse;
  border-radius: 20px;
  width: 80%;
  margin-top: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 5px;
  text-align: left;
  background-color: teal;
  color: white;
  font-weight: bold;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 15px;
  text-align: left;
`;

function RetailerHome() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the server
    axios
      .get("http://localhost:5000/api/orders")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  return (
    <Container>
      <DashboardTitle>RETAILER DASHBOARD</DashboardTitle>
      <Table>
        <thead>
          <tr>
            <Th>Order ID</Th>
            <Th>User ID</Th>
            <Th>Products</Th>
            <Th>Amount</Th>
            <Th>Address</Th>
            <Th>Status</Th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <Td>{order._id}</Td>
              <Td>{order.userId}</Td>
              <Td>
                <ul>
                  {order.products.map((product) => (
                    <li key={product.productId}>
                      {product.productId} : {product.quantity}
                    </li>
                  ))}
                </ul>
              </Td>
              <Td>${order.amount.toFixed(2)}</Td>
              <Td>{JSON.stringify(order.address)}</Td>
              <Td>{order.status}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default RetailerHome;
