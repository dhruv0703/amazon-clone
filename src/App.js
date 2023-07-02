import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.js";
import "./components/Header/Header.css";
import Home from "./components/home/home.js";

function App() {
  return (
    //   <Router>
    //     <div className="App">
    //     <Routes>
    // <Route path="/checkout"
    //  element={<h1>Login page</h1>}/>

    // <Route path = "/login" element=
    //   {<h1>login page</h1>}/>

    // <Route path="/" element=
    //  {}/>

    //   </div>
    //   </Router>
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<h1><Header />   <Home/>HOME PAGE!!</h1>} />
          <Route path="/checkout" element={<><Header /></>} />
          <Route path="/login" element={<h1>Login Page</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
