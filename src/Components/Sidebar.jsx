import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import PagesData from "../assets/data/PagesData";
function Sidebar() {
 const [location, setLocation] = useState("");
 const currentLocation = useLocation().pathname.slice(1);
 useEffect(() => {
  setLocation(currentLocation);
 }, [currentLocation]);
 return (
  <nav className="sidebar">
   <div className="container sidebar__container">
    {PagesData.map((pageData, index) => {
     const pagePath = pageData.pagePath.slice(1); // Remove leading slash
     const isActive = pagePath === "" ? location === "" : location.startsWith(pagePath);
     return (
      <Link
       key={index}
       to={pageData.pagePath}
       title={pageData.pageName}
       className={`${isActive ? "active" : ""}`}
      >
       {pageData.pageIcon}
      </Link>
     );
    })}
   </div>
  </nav>
 );
}

export default Sidebar;
