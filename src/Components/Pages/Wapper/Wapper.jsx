import React from "react";
import { useRoutes } from 'react-router-dom';
import routes from "../../../routes";
import Totalmenu from "../Menu/Totalmenu";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";

export default function Wapper() {
  let router = useRoutes(routes)
  return (
    <div>
        <Logo />
        <Totalmenu />
        {router}
        <Footer />
    </div>
  );
}
