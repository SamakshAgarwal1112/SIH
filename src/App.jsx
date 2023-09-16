import React from "react";
import { Route, Routes } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} ></Route>
        <Route path="/login" element={<LoginPage />} ></Route>
        <Route path="/signup" element={<SignupPage />} ></Route>
      </Routes>
    </>
  )
}

export default App;
