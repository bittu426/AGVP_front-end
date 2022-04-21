import React, { useState, useEffect } from "react";
import Home from "./Home";
import { Component } from "react";

import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Register from "./Register";
import Login from "./Login";
import APIService from "./APIService";
import useToken from "./useToken";
import Profile from "./Profile";
import Plan from "./Plan";
import Message from "./Message";

const apiservice = new APIService();

function App() {
  const { token, removeToken, setToken } = useToken();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login apiservice={apiservice} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/messages" element={<Message />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
