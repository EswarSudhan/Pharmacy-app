import React from "react";
import Announcement from "../components/Announcement";
//import Categories from "../components/Categories";
//import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
//import Slider from "../components/Slider";
import Feedback from "../components/Feedback";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Products/>
      <Feedback/>
    </div>
  );
};

export default Home;