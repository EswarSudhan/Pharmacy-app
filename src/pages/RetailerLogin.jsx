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
    url("https://clearspider.net/wp-content/uploads/2022/11/warehouse-management-system-wms-complete-guide.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  
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

function RetailerLogin() {
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");
    const [loginResult, setLoginResult] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:5000/api/retailerlogin", {
        username: username,
        password: password,
        isRetailer: true,
      })
        .then((result) => {
          console.log(result);
          setLoginResult(result.data);
  
          if (result.data === "Success") {
            navigate('/retailerhome');
          }
        })
        .catch((err) => {
          console.log(err);
          setLoginResult("An error occurred while logging in.");
        });
    };
  
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
            <Button>
              LOGIN
            </Button>
            
            <div>{loginResult}</div>
          </Form>
        </Wrapper>
      </Container>
    );
  }
  
  export default RetailerLogin;