import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthContext } from '../provider/AuthProvider';

const MainLayout = () => {
  // const {user} = useContext(AuthContext);
  // console.log(user.email);
  // const loggedInEmail = {user.email}; // Replace with dynamic value from auth
  return (
    <div>
      {/* Navbar */}
      <Navbar></Navbar>
      {/* Dynamic Contents */}
      <div className='dark:bg-black'>

        <Outlet></Outlet>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;