import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 7px 14px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 20px 10px 0px 0px
`;

function AdminAdd(){
  const [title,setTitle]=useState()
  const [desc,setDescription]=useState()
  const [img,setImage]=useState()
  const [price,setPrice]=useState()
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:5000/api/products",{title:title,desc:desc,img:img,price:price})
    .then(result=>console.log(result))
    .catch(err=>console.log(err))
  }




return (
    <Container>
      <Wrapper>
        <Title>CREATE PRODUCT</Title>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="name"  onChange={(e)=>setTitle(e.target.value)}/> 
          <Input placeholder="description" onChange={(e)=>setDescription(e.target.value)}/>
          <Input placeholder="Image link" onChange={(e)=>setImage(e.target.value)}/>
          <Input placeholder="price" onChange={(e)=>setPrice(e.target.value)}/>
          
        
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default AdminAdd;