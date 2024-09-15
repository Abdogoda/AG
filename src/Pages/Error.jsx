import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../sass/_error.scss";
const Error = () => {
 useEffect(() => {
  let eyes = document.querySelectorAll(".eyes div span");
  document.body.addEventListener("mousemove", (e) => {
   var xAxis = (e.pageX / window.innerWidth) * 100;
   var yAxis = (e.pageY / window.innerHeight) * 100;
   eyes.forEach((eye) => {
    eye.style.top = `${yAxis}%`;
    eye.style.left = `${xAxis}%`;
   });
  });
 }, []);
 return (
  <div className="con">
   <div className="character">
    <div className="body">
     <div className="eyes">
      <div className="left">
       <p>
        <span></span>
       </p>
      </div>
      <div className="right">
       <p>
        <span></span>
       </p>
      </div>
     </div>
     <div className="mouse">
      <span></span>
      <span></span>
      <span></span>
     </div>
    </div>
   </div>
   <div className="text-con">
    <div className="text">
     <h1 className="error-number">404</h1>
     <h4>
      <span>GUH..</span> <span>Maybe..</span> <span>We Have</span>
     </h4>
     <h2 className="error-text">
      <span>PROBLEMS HERE</span>
     </h2>
     <h4>MY BAD This Page Could't Be Found!</h4>
     <div className="error-btn">
      <Link to="/">RETURN HOME</Link>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Error;
