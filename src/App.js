import React from "react";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import MainPage from "./components/MainPage";
import Scroller from "./components/Scroller";
import AboutUs from "./components/AboutUs";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import "./App.css";

const App = () => (
  <div className="overflow-x-hidden">
    <Navbar />
    <Cursor />
    <MainPage />
    {/* <Scroller /> */}
    <AboutUs />
    <Cards />
    <Footer />
  </div>
);

export default App;
