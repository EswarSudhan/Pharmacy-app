import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls.js";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://static.vecteezy.com/system/resources/previews/000/424/797/original/pharmacy-with-doctor-in-counter-drugstore-cartoon-character-vector.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal ;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;



const Error = styled.span`
  color: red;
`;

function Login(){
  const [username,setName]=useState()
  const [password,setPassword]=useState()
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:5000/api/login",{username:username,password:password})
    .then(result=>{console.log(result) 
      if(result.data==="Success"){
    navigate('/products')
      }
  
  })
    .catch(err=>console.log(err))
  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="username"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button >
            LOGIN
          </Button>
          <Link to = "/register"><Button>REGISTER</Button></Link>
          
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;