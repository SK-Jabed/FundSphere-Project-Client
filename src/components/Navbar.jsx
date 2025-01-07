import React, { useContext } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import logo from "../../src/assets/FundShere-logo.png";
import { AuthContext } from "../provider/AuthProvider";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-cyan-400 underline"
              : "text-lg font-medium text-gray-800 hover:text-cyan-400 dark:text-white"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-cyan-400 underline"
              : "text-lg font-medium text-gray-800 hover:text-cyan-400 dark:text-white"
          }
          to={"/campaigns"}
        >
          All Campaigns
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-cyan-400 underline"
              : "text-lg font-medium text-gray-800 hover:text-cyan-400 dark:text-white"
          }
          to={"/about"}
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-cyan-400 underline"
              : "text-lg font-medium text-gray-800 hover:text-cyan-400 dark:text-white"
          }
          to={"/contact"}
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-lg font-bold text-cyan-400 underline"
              : "text-lg font-medium text-gray-800 hover:text-cyan-400 dark:text-white"
          }
          to={"/successStories"}
        >
          Stories
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="h-[84px]">
      <div className=" dark:bg-gray-900 bg-white w-full z-50 fixed border-b">
        <div className="container w-11/12 mx-auto py-4">
          <div className="mx-auto flex justify-between items-center">
            <div className="dropdown relative ml-2">
              <div className="flex items-center gap-1">
                <div
                  tabindex="0"
                  role="button"
                  className="btn border-2 p-3 border-solid rounded-full lg:hidden"
                >
                  <HiMenuAlt1 className="text-xl font-bold" />
                </div>
                <ul
                  tabindex="0"
                  className="menu menu-sm dropdown-content bg-cyan-500 rounded-box z-[1] mt-3 w-52 p-4 shadow absolute left-0"
                >
                  {navLinks}
                </ul>
                <div>
                  <img className="w-[42px]" src={logo} alt="Project Logo"></img>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-1"></div>
            <div className="">
              <ul className="hidden lg:flex items-center justify-center gap-6">
                {navLinks}
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <ThemeToggleButton></ThemeToggleButton>
              {user && user?.email ? (
                <div className="dropdown dropdown-end z-50">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div
                      title={user?.displayName}
                      className="w-11 rounded-full"
                    >
                      <img
                        referrerPolicy="no-referrer"
                        alt="User Profile Photo"
                        src={user?.photoURL}
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link to="/addCampaign" className="justify-between">
                        Add Campaign
                      </Link>
                    </li>
                    <li>
                      <Link to="/myCampaigns">My Campaigns</Link>
                    </li>
                    <li>
                      <Link to="/myDonations">My Donations</Link>
                    </li>
                    <li className="mt-2">
                      <button
                        onClick={logoutUser}
                        className="bg-gray-200 block text-center"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <Link
                    to={"/auth/login"}
                    type="button"
                    className="group flex h-14 w-36 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30"
                  >
                    <div className="flex h-full w-full px-8  items-center justify-center rounded-lg bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out text-lg font-semibold">
                      Login
                    </div>
                  </Link>
                  {/* <Link
                    to={"/auth/register"}
                    type="button"
                    className="group flex h-14 w-36 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 via-red-500 to-yellow-500 p-[1.5px] text-white duration-300 hover:bg-gradient-to-l hover:shadow-2xl hover:shadow-purple-600/30"
                  >
                    <div className="flex h-full w-full px-8  items-center justify-center rounded-lg bg-gray-900 transition duration-300 ease-in-out group-hover:bg-gradient-to-br group-hover:from-gray-700 group-hover:to-gray-900 group-hover:transition group-hover:duration-300 group-hover:ease-in-out text-lg font-semibold">
                      Register
                    </div>
                  </Link> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
