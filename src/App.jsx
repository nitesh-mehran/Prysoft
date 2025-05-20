import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import About from "./components/Pages/About/About";
import Home from "./components/Pages/Home";
import Service from "./components/Pages/Service/Service";
import Project from "./components/Pages/Project/Project";
import Gallery from "./components/Pages/Gallery";
import Career from "./components/Pages/Career";
import Contact from "./components/Pages/Contact";
import Footer from "./components/Layout/Footer";
import Blog from "./components/Pages/Blog";
import Login from "./components/Pages/Login";
import Dashboard from "./components/Pages/Dashboard";
import BlogDetails from "./components/Pages/BlogDeatils";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy";
import TermsAndConditions from "./components/Pages/TermsAndConditions";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/project" element={<Project />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogdeatils/:id" element={<BlogDetails />} />
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
        <Route path="/terms" element={<TermsAndConditions/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
