import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  position: relative;
  height: 100vh;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: ${(props) => props.backgroundColor || 'blue'};
  color: teal;
  border: none;
  border-radius:5px;
  cursor: pointer;
  font-weight: bold;
`;

const Homecenter = () => {

  return (
    <Container>
      <Image src="https://static.vecteezy.com/system/resources/previews/000/424/797/original/pharmacy-with-doctor-in-counter-drugstore-cartoon-character-vector.jpg" />

      {/* Buttons positioned at the bottom right corner */}
      <ButtonsContainer>
      <Link to="/adminlogin">
        <Button backgroundColor="white" onClick={() => console.log('Admin Clicked')}>
          Admin
        </Button>
        </Link>
        <Link to="/retailerlogin">
        <Button backgroundColor="white" onClick={() => console.log('Retailer Clicked')}>
          Retailer
        </Button>
        </Link>
      </ButtonsContainer>
    </Container>
  );
};

export default Homecenter;
