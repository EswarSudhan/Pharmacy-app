
import { Badge, Search, ShoppingBag, ShoppingCart, ShoppingCartCheckoutOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'  

const Container = styled.div `
    heigth: 30px;
    `
const Wrapped = styled.div `
    padding: px 20px;
    display: flex;
    justify-contents:space=between;


    `

const Left = styled.div `
    flex: 1;
    display:flex;
    align-items:center;
    `
const Centre = styled.div `
    flex: 1;
    text-align:center;
    `
const Right = styled.div `
    flex: 1;
    display:flex;
    align-items:center;
    justify-content: flex-end;
    `

const Language = styled.div `
    font-size:14px;
    cursor:pointer;
    `
const SearchContainer = styled.div `
    border:1px solid lightgray;
    display:flex;
    align-items:center;
    padding: 5px;
    margin-left:25px;
    `
const Input = styled.input`
    border:None;
`
const Logo = styled.h1`
    font-weight: bold;
    color: teal;
    
    `
const MenuItem = styled.div`
    font-size: 14px;
    cursor:pointer; 
    margin-left:15px; 
    `



export const Navbar = () => {
  return (
    <Container>
        <Wrapped>
            <Left>
                <Language>EN</Language>
            <SearchContainer>
                <Input/>
                <Search/>
                
            </SearchContainer>
            </Left>
            <Centre>
                <Logo>Pharmacy</Logo>
            </Centre>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <MenuItem>
                <Badge badgecontent={4} color="primary"><ShoppingCartOutlined/></Badge>
                </MenuItem>
            </Right>
            
            
        </Wrapped>
    </Container>
  )
}
