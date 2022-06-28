import './App.css';
import React from "react";
import * as Sentry from "@sentry/react";
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import NavBar from './NavBar';
import ApiCall from './apiCall';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    
    <div className="App">
      <ApiCall />
      <NavBar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
      </Routes>   
      <button type="button" style={{ size: '18px', padding: '20px', color: "black", background: "silver", width: '300px'}} onClick={() => {
        throw Error('Oops, something failed.')}
      }>Click to invoke Error</button>
    </div>
  );
}

export default Sentry.withProfiler(App);
