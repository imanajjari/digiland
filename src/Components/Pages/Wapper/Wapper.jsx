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
import User from "../Menu/User";

export default function Wapper() {
  return (
    <div>
      <BrowserRouter>
        <Logo />
        <Totalmenu />
        <Routes>
          <Route path="/digiland" element={<Firstcomp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/Products/:id" element={<Singleproducts />}></Route>
          <Route path="/User" element={<User />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
