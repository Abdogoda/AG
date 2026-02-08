import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { getImageUrl } from "../utils/imageUrl";
import { LazyImage } from "../hooks/useLazyImage";

function ProjectShowImages({ projectImages }) {
 const [activeImage, setActiveImage] = useState(0);
 const handleNavigator = (orient) => {
  if (orient === "left") {
   if (activeImage !== 0) {
    setActiveImage((prev) => prev - 1);
   }
  } else {
   if (activeImage !== projectImages.length - 1) {
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
        <LazyImage src={getImageUrl(projectImage)} alt={`Project screenshot ${index + 1}`} />
       </li>
      );
     })}
    </ul>
   )}
   <div className="project__images__card">
    <LazyImage src={getImageUrl(projectImages[activeImage])} alt="Main project screenshot" />
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
