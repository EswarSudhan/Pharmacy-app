import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
/*import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";*/
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

import Checkout from "./pages/Checkout";
import AdminAdd from "./pages/AdminAdd";
import AdminLogin from "./pages/AdminLogin";
import RetailerLogin from "./pages/RetailerLogin";
import RetailerHome from "./pages/RetailerHome";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
         
        
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* Add other routes as needed */}
      
        
        <Route path="/success" element={<Success />} />
        <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
<Route path="/adminadd" element={<AdminAdd />} />
<Route path="/adminlogin" element={<AdminLogin />} />
<Route path="/retailerlogin" element={<RetailerLogin />} />
<Route path="/retailerhome" element={<RetailerHome />} />

      </Routes>
    </Router>
  );
};

export default App;