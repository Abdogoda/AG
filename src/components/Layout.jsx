import React from "react";
import Home from "./Home";
import Portfolio from "./Portfolio";
import { Route, Routes } from "react-router-dom";
import Particle from "./Particle";
import Contact from "./Contact";
import About from "./About";
import Error from "./Error";
function Layout() {
 return (
  <>
   <Particle />
   <Routes>
    <Route path="/">
     <Route index element={<Home />} />
     <Route path="about" element={<About />} />
     <Route path="projects" element={<Portfolio />} />
     <Route path="contact" element={<Contact />} />
     <Route path="*" element={<Error />} />
    </Route>
   </Routes>
  </>
 );
}

export default Layout;
