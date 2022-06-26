import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Form from "./Component/Form";
import Profiles from "./Component/Profiles";
import Role from "./Component/Role";
import List from "./Component/List";
import Changepw from "./Component/Changepw";
import Book from "./Component/Book";
import Login from "./Component/Login";
import Protected from "./Utils/Protected";
import Dashboard from "./Layout/Dashboard";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />

        <Route element={<Protected />}>
          <Route
            element={
              <Dashboard
                sidebarOpen={sidebarOpen}
                toggleSidebar={toggleSidebar}
              />
            }
          >
            {/* <Navbar /> */}
            <Route path="/profiles" element={<Profiles />} />
            <Route path="/role" element={<Role />} />
            <Route path="/form" element={<Form />} />
            <Route path="/user" element={<List />} />
            <Route path="/change" exact element={<Changepw />} />
            <Route path="/book" element={<Book />} />
            <Route path="/list" element={<List />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <div className="inline-flex w-screen h-screen text-5xl bg-gray-600 text-red-400 items-center justify-center">
              404 Page Not Found
            </div>
          }
        />
      </Routes>
    </>
  );
};
export default App;
