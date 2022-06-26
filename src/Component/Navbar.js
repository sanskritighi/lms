import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/auth";

const Navbar = ({ toggleSidebar }) => {
  const { setAuth } = useAuth();

  const logout = () => {
    sessionStorage.removeItem("token");
    setAuth({ token: null });
  };
  return (
    <nav className="bg-white m-2 flex justify-between ">
      <div className="flex ">
        <span onClick={toggleSidebar}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </span>
      </div>
      <div className="">
        <button
          className="bg-blue rounded-full px-5 p-1 text-white  justify-end "
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
