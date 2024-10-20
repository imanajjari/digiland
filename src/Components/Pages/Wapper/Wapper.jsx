import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Firstcomp from "../Firstcomp/Firstcomp";
import Logo from "../Logo/Logo";
import Login from "../Menu/Login";
import Products from "../Products/Products";
import Totalmenu from "../Menu/Totalmenu";
import Footer from "../Footer/Footer";
import Error from "../Error404/Error";
import Singleproducts from "../Products/Singleproducts";
import Contact from "../Contact/Contact";

export default function Wapper() {
  return (
    <div>
      <BrowserRouter>
        <Logo />
        <Totalmenu />
        <Routes>
          <Route path="/" element={<Firstcomp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/Products/:id" element={<Singleproducts />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
