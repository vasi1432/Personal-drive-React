import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./assets/components/header";
import Footer from "./assets/components/footer";
import Login from "./assets/components/login";
import Signup from "./assets/components/signup";
import HomePage from "./assets/components/home";
import About from "./assets/components/about";
import Drive from "./assets/components/drive";
import Safety from "./assets/components/safety";
import RideWithUs from "./assets/components/ridewithus";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/header.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login></Login>}></Route>
      <Route path="/home" element={<HomePage></HomePage>}></Route>
      <Route path="/About" element={<About></About>}></Route>
      <Route path="/Ride" element={<RideWithUs></RideWithUs>}></Route>
      <Route path="/Drive" element={<Drive></Drive>}></Route>
      <Route path="/SAFETY" element={<Safety></Safety>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>

      {/* <Footer></Footer> */}
    </Routes>
  </BrowserRouter>
);
