

import { Outlet } from "react-router-dom";
import Footer from "./footer";
import NavBar from "./navBar/navBar";

function Layout() {
  return (
    <>
      <NavBar/>
      <div className="relative z-[-10]">
        <Outlet /> 
      </div>
      <Footer/>
    </>
  );
}

export default Layout;
