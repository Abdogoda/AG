import React from "react";
function LoadingLayout() {
  return (
    <div className="loading__layout">
      <svg>
        <symbol id="text">
          <text textAnchor="middle" x="50%" y="50%">
            AG
          </text>
        </symbol>
        <use href="#text" className="text"></use>
        <use href="#text" className="text"></use>
        <use href="#text" className="text"></use>
      </svg>
    </div>
  );
}

export default LoadingLayout;
