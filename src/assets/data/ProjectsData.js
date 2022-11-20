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
import PROJECTIMG9 from "../images/project9.png";
import PROJECTMOBILEIMG9 from "../images/project9_mobile.png";
import PROJECTIMG11 from "../images/project11.png";
import PROJECTMOBILEIMG11 from "../images/project11_mobile.png";
import PROJECTIMG12 from "../images/project12.png";
import PROJECTMOBILEIMG12 from "../images/project12_mobile.jpg";
import PROJECTIMG13 from "../images/project13.png";
import PROJECTMOBILEIMG13 from "../images/project13_mobile.jpg";
import PROJECTIMG14 from "../images/project14.png";
import PROJECTMOBILEIMG14 from "../images/project14_mobile.png";
// import font icons
import {
 faHtml5,
 faCss3,
 faJs,
 faReact,
 faPhp,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
const ProjectsData = [
 {
  img: PROJECTIMG3,
  mobileImg: PROJECTMOBILEIMG3,
  languages: [
   { icon: faHtml5, class: "html" },
   { icon: faCss3, class: "css" },
   { icon: faJs, class: "js" },
   { icon: faReact, class: "react" },
  ],
  title: "URTV",
  description:
   "URTV is using IMDB API to showing the diffrent categories of movies up to date.",
  githubLink: "https://github.com/Abdogoda/URTV",
  liveDemoLink: "https://abdogoda.github.io/URTV/",
  type: "react",
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
  githubLink: "https://github.com/Abdogoda/Yolo_Store",
  liveDemoLink: "https://abdogoda.github.io/Yolo_Store/",
  type: "react",
 },
 {
  img: PROJECTIMG6,
  mobileImg: PROJECTMOBILEIMG6,
  languages: [
   { icon: faHtml5, class: "html" },
   { icon: faCss3, class: "css" },
   { icon: faJs, class: "js" },
   { icon: faReact, class: "react" },
  ],
  title: "CALA Store",
  description:
   "CALA is an awsome clothe store with good a greate experience and a lot of puety.",
  githubLink: "https://github.com/Abdogoda/CALA_STORE",
  liveDemoLink: "https://abdogoda.github.io/CALA_STORE/",
  type: "react",
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
  githubLink: "https://github.com/Abdogoda/Bonik_Store",
  liveDemoLink: "https://abdogoda.github.io/Bonik_Store/",
  type: "react",
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
  githubLink: "https://github.com/Abdogoda/Gym-Store",
  liveDemoLink: "https://abdogoda.github.io/Gym-Store/",
  type: "react",
 },

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
  liveDemoLink: "http://grocery.eb2a.com/",
  type: "php",
 },
 {
  img: PROJECTIMG13,
  mobileImg: PROJECTMOBILEIMG13,
  languages: [
   { icon: faHtml5, class: "html" },
   { icon: faCss3, class: "css" },
   { icon: faJs, class: "js" },
   { icon: faPhp, class: "php" },
   { icon: faDatabase, class: "database" },
  ],
  title: "Bookly Store",
  description:
   "Bookly Store is a PHP FullStack project Connected To MYSQL to make a greatfull experience In Buying Books.",
  githubLink: "https://github.com/Abdogoda",
  liveDemoLink: "http://booklys.epizy.com/",
  type: "php",
 },
 {
  img: PROJECTIMG11,
  mobileImg: PROJECTMOBILEIMG11,
  languages: [
   { icon: faHtml5, class: "html" },
   { icon: faCss3, class: "css" },
   { icon: faJs, class: "js" },
   { icon: faPhp, class: "php" },
   { icon: faDatabase, class: "database" },
  ],
  title: "PETTY",
  description:
   "PETTY is a PHP FullStack project Connected To MYSQL to make a greatfull experience.",
  githubLink: "https://github.com/Abdogoda",
  liveDemoLink: "http://petty.great-site.net",
  type: "php",
 },
 {
  img: PROJECTIMG12,
  mobileImg: PROJECTMOBILEIMG12,
  languages: [
   { icon: faHtml5, class: "html" },
   { icon: faCss3, class: "css" },
   { icon: faJs, class: "js" },
   { icon: faPhp, class: "php" },
   { icon: faDatabase, class: "database" },
  ],
  title: "PHP CRUD",
  description:
   "CRUD Operation Includes (CREATE, READ, UPDATE, DELETE) Using PHP and MYSQL.",
  githubLink: "https://github.com/Abdogoda/CRUD",
  liveDemoLink: "http://csv.42web.io/",
  type: "php",
 },
 {
  img: PROJECTIMG14,
  mobileImg: PROJECTMOBILEIMG14,
  languages: [
   { icon: faHtml5, class: "html" },
   { icon: faCss3, class: "css" },
   { icon: faJs, class: "js" },
   { icon: faPhp, class: "php" },
   { icon: faDatabase, class: "database" },
  ],
  title: "Data Generator",
  description: "PHP Random Data Generator Using PHP and MYSQL.",
  githubLink: "https://github.com/Abdogoda/Data_Generator",
  liveDemoLink: "http://csv.infinityfreeapp.com/",
  type: "php",
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
  githubLink: "https://github.com/Abdogoda/Chair_Store",
  liveDemoLink: "https://github.com/Abdogoda/Chair_Store",
  type: "js",
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
  githubLink: "https://github.com/Abdogoda/Resturant_Website",
  liveDemoLink: "https://github.com/Abdogoda/Resturant_Website",
  type: "js",
 },
];
export default ProjectsData;
