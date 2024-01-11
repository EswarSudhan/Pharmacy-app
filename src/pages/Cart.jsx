import { Add, Remove } from '@mui/icons-material';
import { useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
//import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const history = useNavigate();

  const handleCheckout = async () => {
    try {
      // Extract product IDs from the cart
      const productIds = cart.products.map((product) => product._id);

      // 1. Make a request to store product IDs in the database
      const res = await userRequest.post("/orders/create", {
        productIds: productIds,
        // Additional order information can be added here
      });

      // 2. Redirect to the success page with order data
      history.push("/success", {
        orderData: res.data,
        products: cart.products,
      });
    } catch (error) {
      // Handle errors appropriately
      console.error("Error during checkout:", error);
    }
  };

  // ... (previous code)

return (
  <Container>
    
    <Announcement />
    <Wrapper>
      <Title>YOUR BAG</Title>
      <Top>
        <Link to="/products">
        <TopButton>CONTINUE SHOPPING</TopButton>
        </Link>
        <TopTexts>
          <TopText>Shopping Bag({cart.products.length})</TopText>
          <TopText>Your Wishlist (0)</TopText>
        </TopTexts>
        <Link to="/checkout">
          <TopButton type="filled" onClick={handleCheckout}>
            CHECKOUT NOW
          </TopButton>
        </Link>
      </Top>
      <Bottom>
      <Info>
  {cart.products.map((product) => (
    <Product key={product._id}>
      <ProductDetail>
        <Image src={product.img} alt={product.title} />
        <Details>
          <ProductName>
            <b>Product:</b> {product.title}
          </ProductName>
          <ProductId>
            <b>ID:</b> {product._id}
          </ProductId>
          <ProductColor color={product.color} />
          <ProductSize>
            <b>Size:</b> {product.size}
          </ProductSize>
          <ProductAmountContainer>
            <Add />
            <ProductAmount>{product.quantity}</ProductAmount>
            <Remove />
          </ProductAmountContainer>
        </Details>
      </ProductDetail>
      <PriceDetail>
        <ProductPrice>
          $ {product.price * product.quantity}
        </ProductPrice>
      </PriceDetail>
    </Product>
  ))}

  <Hr />
</Info>
        <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
          </SummaryItem>
          {/* Additional summary items can be added here */}
          <StripeCheckout
            name="Pharmacy"
            image=""
            billingAddress
            shippingAddress
            description={`Your total is $${cart.total}`}
            amount={cart.total * 100}
            
            stripeKey={KEY}
          >
            <Button onClick={handleCheckout}>CHECKOUT NOW</Button>
          </StripeCheckout>
        </Summary>
      </Bottom>
    </Wrapper>
  </Container>
);

};

export default Cart;