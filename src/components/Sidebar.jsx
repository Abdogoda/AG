import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import PagesData from "../assets/data/PagesData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          return (
            <Link
              key={index}
              to={pageData.pagePath}
              className={`${
                location === pageData.pagePath.slice(1) ? "active" : ""
              }`}
            >
              <FontAwesomeIcon icon={pageData.pageIcon} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Sidebar;
