import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "../pages/User";
import Provider from "../pages/Provider";
import Admin from "../pages/Admin";
import Login from "../pages/Login";
import Home from "../pages/Home";

import ProtectedRoutes from "./ProtectedRoutes";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoutes Component={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<ProtectedRoutes Component={User} />} />
          <Route
            path="/admin"
            element={<ProtectedRoutes Component={Admin} />}
          />
          <Route
            path="/provider"
            element={<ProtectedRoutes Component={Provider} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
