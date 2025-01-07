import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  // const {user} = useContext(AuthContext);
  // console.log(user.email);
  // const loggedInEmail = {user.email}; // Replace with dynamic value from auth
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Dynamic Contents */}
      <div className="dark:bg-gray-900">
        <Outlet></Outlet>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
