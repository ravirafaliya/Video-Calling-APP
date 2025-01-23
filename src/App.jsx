import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./assets/Components/Home";
import Navbar from "./assets/Components/Navbar";
import VideoComp from "./assets/Components/VideoComp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomID" element={<VideoComp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
