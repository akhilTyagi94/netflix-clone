import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const user = null;

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {!user ? (
            <Route exact path="/" element={<LoginScreen />} />
          ) : (
            <Route exact path="/home" element={<HomeScreen />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
