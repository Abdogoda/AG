import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function ProjectShowImages({ projectImages }) {
 const [activeImage, setActiveImage] = useState(0);
 const handleNavigator = (orient) => {
  if (orient === "left") {
   if (activeImage != 0) {
    setActiveImage((prev) => prev - 1);
   }
  } else {
   if (activeImage != projectImages.length - 1) {
    setActiveImage((prev) => prev + 1);
   }
  }
 };
 return (
  <div className="show__project__images">
   {projectImages.length > 1 && (
    <ul className="project__images__list">
     {projectImages.map((projectImage, index) => {
      return (
       <li
        key={index}
        onClick={() => setActiveImage(index)}
        className={index === activeImage ? `active` : ``}
        style={{
         animationDelay: `${0.2 * index + 1.5}s`,
        }}
       >
        <img src={projectImage} alt={`Project_image_${index}`} />
       </li>
      );
     })}
    </ul>
   )}
   <div className="project__images__card">
    <img src={projectImages[activeImage]} alt="project__active__image" />
    {projectImages.length > 1 && (
     <div className="project__images__navigator">
      <span
       className={`left ${activeImage === 0 ? "disactive" : ""}`}
       onClick={() => handleNavigator("left")}
      >
       <SlArrowLeft />
      </span>
      <span
       className={`right ${
        activeImage === projectImages.length - 1 ? "disactive" : ""
       }`}
       onClick={() => handleNavigator("right")}
      >
       <SlArrowRight />
      </span>
     </div>
    )}
   </div>
  </div>
 );
}

export default ProjectShowImages;
