import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Components
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";


import Navbar from "./components/Navbar";

const App = () => {
  return <React.Fragment>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.Fragment>
}

export default App;