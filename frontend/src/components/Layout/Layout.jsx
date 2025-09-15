

import { Outlet } from "react-router-dom";
import Footer from "./footer";
import NavBar from "./navBar/navBar";

function Layout() {
  return (
    <>
      <NavBar/>
      <div className="">
        <Outlet /> 
      </div>
      <Footer/>
    </>
  );
}

export default Layout;
