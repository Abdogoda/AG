// import images
import PROJECTIMG1 from "../images/project1.png";
import PROJECTMOBILEIMG1 from "../images/project1_mobile.png";
import PROJECTIMG2 from "../images/project2.png";
import PROJECTMOBILEIMG2 from "../images/project2_mobile.png";
import PROJECTIMG3 from "../images/project3.png";
import PROJECTMOBILEIMG3 from "../images/project3_mobile.png";
import PROJECTIMG4 from "../images/project4.png";
import PROJECTMOBILEIMG4 from "../images/project4_mobile.png";
import PROJECTIMG5 from "../images/project5.png";
import PROJECTMOBILEIMG5 from "../images/project5_mobile.png";
import PROJECTIMG6 from "../images/project6.png";
import PROJECTMOBILEIMG6 from "../images/project6_mobile.png";
import PROJECTIMG7 from "../images/project7.png";
import PROJECTMOBILEIMG7 from "../images/project7_mobile.png";
import PROJECTIMG8 from "../images/project8.png";
import PROJECTMOBILEIMG8 from "../images/project8_mobile.png";
import PROJECTIMG9 from "../images/project9.png";
import PROJECTMOBILEIMG9 from "../images/project9_mobile.png";
import PROJECTIMG10 from "../images/project10.png";
import PROJECTMOBILEIMG10 from "../images/project10_mobile.png";
import PROJECTIMG11 from "../images/project11.png";
import PROJECTMOBILEIMG11 from "../images/project11_mobile.png";
// import font icons
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faR } from "@fortawesome/free-solid-svg-icons";
const ProjectsData = [
  {
    img: PROJECTIMG9,
    mobileImg: PROJECTMOBILEIMG9,
    languages: [
      { icon: faHtml5, class: "html" },
      { icon: faCss3, class: "css" },
      { icon: faJs, class: "js" },
      { icon: faPhp, class: "php" },
      { icon: faDatabase, class: "database" },
    ],
    title: "Your Grocery",
    description:
      "Your Grocery is a PHP FullStack project Connected To MYSQL to make a greatfull experience.",
    githubLink: "https://github.com/Abdogoda",
    liveDemoLink: "www.liveDemo.com",
  },
  {
    img: PROJECTIMG10,
    mobileImg: PROJECTMOBILEIMG10,
    languages: [
      { icon: faHtml5, class: "html" },
      { icon: faCss3, class: "css" },
      { icon: faJs, class: "js" },
      { icon: faPhp, class: "php" },
      { icon: faDatabase, class: "database" },
    ],
    title: "CHAT APP",
    description:
      "CHAT APP is a PHP FullStack project Connected To MYSQL to make a greatfull experience.",
    githubLink: "https://github.com/Abdogoda",
    liveDemoLink: "www.liveDemo.com",
  },
  {
    img: PROJECTIMG11,
    mobileImg: PROJECTMOBILEIMG11,
    languages: [
      { icon: faHtml5, class: "html" },
      { icon: faCss3, class: "css" },
      { icon: faJs, class: "js" },
      { icon: faReact, class: "react" },
      { icon: faPhp, class: "php" },
      { icon: faDatabase, class: "database" },
    ],
    title: "PETTY",
    description:
      "PETTY is a PHP FullStack project Connected To MYSQL to make a greatfull experience.",
    githubLink: "https://github.com/Abdogoda",
    liveDemoLink: "www.liveDemo.com",
  },
  {
    img: PROJECTIMG1,
    mobileImg: PROJECTMOBILEIMG1,
    title: "BONIK Store",
    languages: [
      { icon: faHtml5, class: "html" },
      { icon: faCss3, class: "css" },
      { icon: faJs, class: "js" },
      { icon: faReact, class: "react" },
    ],
    description:
      "Bonik Store Is an online store to sale all products online with a great experience.",
    githubLink: "https://github.com/Abdogoda",
    liveDemoLink: "www.liveDemo.com",
  },
  {
    img: PROJECTIMG2,
    mobileImg: PROJECTMOBILEIMG2,
    languages: [
      { icon: faHtml5, class: "html" },
      { icon: faCss3, class: "css" },
      { icon: faJs, class: "js" },
      { icon: faReact, class: "react" },
    ],
    title: "VAWELENS",
    description:
      "VAWELENS is an online gym care made by react and provides dark and light theme.",
    githubLink: "https://github.com/Abdogoda",
    liveDemoLink: "www.liveDemo.com",
  },
  {
    img: PROJECTIMG3,
    mobileImg: PROJECTMOBILEIMG3,
    languages: [
      { icon: faHtml5, class: "html" },
      { icon: faCss3, class: "css" },
      { icon: faJs, class: "js" },
      { icon: faReact, class: "react" },
    ],
    title: "Movie App",
    description:
      "Movie App is using IMDB API to showing the diffrent categories of movies up to date.",
    githubLink: "https://github.com/Abdogoda",
    liveDemoLink: "www.liveDemo.com",
  },
  {
    img: PROJECTIMG4,
    mobileImg: PROJECTMOBILEIMG4,
    languages: [
      { icon: faHtml5, class: "html" },
      { icon: faCss3, class: "css" },
      { icon: faJs, class: "js" },
      { icon: faReact, class: "react" },
    ],
    title: "YOLO Store",
    description:
      "YOLO is an awsome clothe store with good a greate experience and a lot of puety.",
    githubLink: "https://github.com/Abdogoda",
    liveDemoLink: "www.liveDemo.com",
  },
  {
    img: PROJECTIMG5,
    mobileImg: PROJECTMOBILEIMG5,
    languages: [
      { icon: faHtml5, class: "html" },
      { icon: faCss3, class: "css" },
      { icon: faJs, class: "js" },
    ],
    title: "Funni Store",
    description:
      "Funni Store Is an online chairs store, you can get a Flexible and Fantastic Chair.",
    githubLink: "https://github.com/Abdogoda",
    liveDemoLink: "www.liveDemo.com",
  },
  {
    img: PROJECTIMG6,
    mobileImg: PROJECTMOBILEIMG6,
    languages: [
      { icon: faHtml5, class: "html" },
      { icon: faCss3, class: "css" },
      { icon: faJs, class: "js" },
    ],
    title: "AbdoGoda",
    description:
      "AbdoGoda is an old portfolio with very much good animation and provides dark and light theme.",
    githubLink: "https://github.com/Abdogoda",
    liveDemoLink: "www.liveDemo.com",
  },
  {
    img: PROJECTIMG7,
    mobileImg: PROJECTMOBILEIMG7,
    languages: [
      { icon: faHtml5, class: "html" },
      { icon: faCss3, class: "css" },
      { icon: faJs, class: "js" },
    ],
    title: "Dine Out",
    description:
      "Dine Out is a great Online Resturant With much colors and dark, light theme.",
    githubLink: "https://github.com/Abdogoda",
    liveDemoLink: "www.liveDemo.com",
  },
  {
    img: PROJECTIMG8,
    mobileImg: PROJECTMOBILEIMG8,
    languages: [
      { icon: faHtml5, class: "html" },
      { icon: faCss3, class: "css" },
      { icon: faJs, class: "js" },
    ],
    title: "Travel",
    description:
      "Travel is a great Online Resturant With much colors and dark, light theme.",
    githubLink: "https://github.com/Abdogoda",
    liveDemoLink: "www.liveDemo.com",
  },
];
export default ProjectsData;
