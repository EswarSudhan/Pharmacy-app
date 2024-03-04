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
    url("https://img.freepik.com/premium-photo/texture-craft-white-light-blue-paper-background-half-two-colors-macro-structure-vintage-cerulean-cardboard_113767-5918.jpg?size=626&ext=jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 20%;
  padding: 20px;
  
  ${mobile({ width: "25%" })}
  
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
  const [name,setName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const [deleteUsername, setDeleteUsername] = useState("");
  const [loginResult, setLoginResult] = useState("");


  const handlRetailer=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:5000/api/register",{username:name,email:email,password:password,isRetailer:true})
    .then(result=>{console.log(result);
           setLoginResult(result.data);})
    .catch(err=>console.log(err))
  }

  
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:5000/api/products",{title:title,desc:desc,img:img,price:price})
    .then(result=>{console.log(result);
    setLoginResult(result.data);})
    .catch(err=>console.log(err))
  }

  const handleDelete = (e) => {
    e.preventDefault()
    axios
      .delete(`http://localhost:5000/api/products/delete/${title}`)
      .then((result) => {
        console.log(result.data);
        
           setLoginResult(result.data);
        // Handle successful deletion, if needed
      })
      .catch((err) => {
        console.error("Error deleting product:", err);
        // Handle deletion error, if needed
      });
  };


  const handleDeleteUser = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/api/users/delete/${deleteUsername}`)
      .then((result) => {
        console.log(result.data);
        
           setLoginResult(result.data);
        // Handle successful deletion, if needed
      })
      .catch((err) => {
        console.error("Error deleting user:", err);
        // Handle deletion error, if needed
      });
  };
  



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
          <div>{loginResult}</div>
        </Form>
      </Wrapper>
    

   
    <Wrapper>
  <Title>DELETE PRODUCT</Title>
  <Form onSubmit={handleDelete}>
    <Input placeholder="name"  onChange={(e)=>setTitle(e.target.value)}/> 
    
  
    <Button>DELETE</Button>
    <div>{loginResult}</div>
  </Form>
</Wrapper>

<Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handlRetailer}>
          <Input placeholder="name"  onChange={(e)=>setName(e.target.value)}/> 
          <Input placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
          <Input placeholder="code" onChange={(e)=>setPassword(e.target.value)}/>
          
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
          <div>{loginResult}</div>
        </Form>
      </Wrapper>

      <Wrapper>
        <Title>DELETE RETAILER</Title>
        <Form onSubmit={handleDeleteUser}>
          <Input
            placeholder="name"
            onChange={(e) => setDeleteUsername(e.target.value)}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>DELETE</Button>
          <div>{loginResult}</div>
        </Form>
      </Wrapper>
</Container>
  );
}

export default AdminAdd;