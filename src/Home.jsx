import React from "react";
import web from "../src/images/homepage1.jpg";
import {NavLink, Outlet} from "react-router-dom";
import Common from "./common";


const Home = () => {
  return (
    <>
      <Common
      name="Let's Start The Journey Of Coding with" 
      imgsrc={web} 
      visit="/service" 
      btname="Get Started" 
      />
      <Outlet/>
    </>
  );
};

export default Home;
