import React from "react";
import { FaGithub } from "react-icons/fa6";
import { TfiMore } from "react-icons/tfi";
import { Link } from "react-router-dom";

function ProjectBox({ project, index, delay }) {
 const { images, mobileImg, title, slug, githubLink } = project;
 return (
  <div
   className="project__box"
   key={index}
   style={{
    animationDelay: `${0.2 * index + delay}s`,
   }}
  >
   <div className="project__box__card">
    <div
     className="box__img__overlay"
     style={{
      backgroundImage: `url(${images[0]})`,
     }}
    >
     <div
      className="mobile__image__box"
      style={{
       animationDelay: `${0.2 * index + delay + 0.1}s`,
      }}
     >
      <div className="mobile__layout">
       <div className="mobile__mic"></div>
       <div className="mobile__screen">
        <img src={mobileImg} alt={title} className="mobile__img" />
       </div>
       <div className="mobile__button"></div>
      </div>
     </div>
     <div className="project__cover">
      <h2 className="title">{title}</h2>
      <div className="project__links">
       <a
        href={`${githubLink}`}
        title={`Github ${title}`}
        target="_blank"
        rel="noreferrer"
        className="project__link"
        style={{ animationDelay: `0.6s` }}
       >
        Code <FaGithub />
       </a>
       <Link
        to={`/projects/${slug}`}
        title={`Show Details ${title}`}
        className="project__link"
        style={{ animationDelay: `0.7s` }}
       >
        Details <TfiMore />
       </Link>
      </div>
     </div>
    </div>

    <div className="project__box__light"></div>
   </div>
  </div>
 );
}

export default ProjectBox;
