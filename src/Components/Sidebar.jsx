import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import useData from '../hooks/useData';
import { getIcon } from '../utils/iconMap';
function Sidebar() {
  const { data: pagesData } = useData('pages');
  const [location, setLocation] = useState('');
  const currentLocation = useLocation().pathname.slice(1);
  useEffect(() => {
    setLocation(currentLocation);
  }, [currentLocation]);
  return (
    <nav className="sidebar">
      <div className="container sidebar__container">
        {pagesData?.pages?.map((pageData, index) => {
          const pagePath = pageData.pagePath.slice(1); // Remove leading slash
          const isActive =
            pagePath === '' ? location === '' : location.startsWith(pagePath);
          const IconComponent = getIcon(pageData.icon);
          return (
            <Link
              key={index}
              to={pageData.pagePath}
              title={pageData.pageName}
              className={`${isActive ? 'active' : ''}`}
            >
              {IconComponent && <IconComponent />}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Sidebar;
