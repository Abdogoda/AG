import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PagesData from "../assets/data/PagesData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SocailData from "../assets/data/SocialData";
function Header() {
  const [activeLinks, setActiveLinks] = useState(false);
  const [location, setLocation] = useState("");
  const currentLocation = useLocation().pathname.slice(1);
  useEffect(() => {
    setLocation(currentLocation);
  }, [currentLocation]);
  return (
    <>
      <header className="header">
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`header__right__link ${
                      location === "contact" ? "active" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.1 + 1.8}s` }}
                  >
                    <FontAwesomeIcon icon={social.icon} />
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
            </div>
          </div>
        </div>
      </header>
      <div className={`header__nav__links ${activeLinks ? "active" : ""}`}>
        {PagesData.map((pageData, index) => {
          return (
            <li
              key={index}
              style={{ animationDelay: `${0.1 * (0.5 + index)}s` }}
            >
              <Link
                to={pageData.pagePath}
                onClick={() => setActiveLinks(!activeLinks)}
                className={`${
                  location === pageData.pagePath.slice(1) ? "active" : ""
                }`}
              >
                {pageData.pageName}
              </Link>
            </li>
          );
        })}
      </div>
    </>
  );
}

export default Header;
