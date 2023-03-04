import React from "react";
import Block from "./pages/Home/Block";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Weekly from "./pages/Weekly/Weekly";

const App = () => {
  const [location, setLocation] = React.useState("Tashkent");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Block location={location} setLocation={setLocation} />} />  
        <Route path="/weekly" element={<Weekly  location={location} />} />  
      </Routes>
    </div>
  );
}

export default App;
