import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { DeliveryPage } from "./pages/DeliveryPage/DeliveryPage";
import { DietsPage } from "./pages/DietsPage/DietsPage";
import { MenuPage } from "./pages/MenuPage/MenuPage";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="delivery" element={<DeliveryPage />} />
          <Route path="diets" element={<DietsPage />} />
          <Route path="menu" element={<MenuPage />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
