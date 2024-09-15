import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PagesData from "../assets/data/PagesData";
import { SocailData } from "../assets/data/Data";
function Header() {
 const [activeLinks, setActiveLinks] = useState(false);
 const [location, setLocation] = useState("");
 const currentLocation = useLocation().pathname.slice(1);
 const [activeScroll, setActiveScroll] = useState(false);

 useEffect(() => {
  if (typeof window !== "undefined") {
   window.addEventListener("scroll", () =>
    setActiveScroll(window.pageYOffset > 20)
   );
  }
 }, []);
 useEffect(() => {
  setLocation(currentLocation);
 }, [currentLocation]);
 return (
  <>
   <header className={`header ${activeScroll ? "active_scroll" : ""}`}>
    <div className="container header__container">
     <Link to="/" className="header__logo a__text">
      AG
     </Link>
     <div className="header__right">
      <div
       className={`header__right__links ${
        location === "contact" ? "active" : ""
       }`}
      >
       {SocailData.map((social, index) => {
        return (
         <a
          key={index}
          href={social.link}
          title={social.name}
          target="_blank"
          rel="noopener noreferrer"
          className={`header__right__link ${
           location === "contact" ? "active" : ""
          }`}
          style={{ animationDelay: `${index * 0.1 + 1.8}s` }}
         >
          {social.icon}
         </a>
        );
       })}
      </div>
      <div
       className={`header__right__toggle ${activeLinks ? "active" : ""}`}
       onClick={() => setActiveLinks(!activeLinks)}
      >
       <span></span>
       <span></span>
       <span></span>
       <span></span>
      </div>
     </div>
    </div>
   </header>
   <ul className={`header__nav__links ${activeLinks ? "active" : ""}`}>
    {PagesData.map((pageData, index) => {
     return (
      <li key={index} style={{ animationDelay: `${0.1 * (0.5 + index)}s` }}>
       <Link
        to={pageData.pagePath}
        onClick={() => setActiveLinks(!activeLinks)}
        title={pageData.pageName}
        className={`${location === pageData.pagePath.slice(1) ? "active" : ""}`}
       >
        {pageData.pageName}
       </Link>
      </li>
     );
    })}
   </ul>
  </>
 );
}

export default Header;
