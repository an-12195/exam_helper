import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Auth from "./components/Auth"; // Your auth component (create it)

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}
