// import images
import CONTENT_CREATOR_1 from "../images/content_creator_1.jpg";
import CONTENT_CREATOR_2 from "../images/content_creator_2.jpg";
import CONTENT_CREATOR_3 from "../images/content_creator_3.jpg";
import CONTENT_CREATOR_4 from "../images/content_creator_4.jpg";
import CONTENT_CREATOR_5 from "../images/content_creator_5.jpg";
import CONTENT_CREATOR_MOBILE from "../images/content_creator_mobile.jpg";
import LARAVEL_CHOOL_1 from "../images/laravel_school_1.jpg";
import LARAVEL_CHOOL_2 from "../images/laravel_school_2.jpg";
import LARAVEL_CHOOL_3 from "../images/laravel_school_3.jpg";
import LARAVEL_CHOOL_4 from "../images/laravel_school_4.jpg";
import LARAVEL_CHOOL_5 from "../images/laravel_school_5.jpg";
import LARAVEL_CHOOL_6 from "../images/laravel_school_6.jpg";
import LARAVEL_CHOOL_7 from "../images/laravel_school_7.jpg";
import LARAVEL_CHOOL_MOBILE from "../images/laravel_school_mobile.jpg";
import PROJECTIMG1 from "../images/project1.png";
import PROJECTMOBILEIMG1 from "../images/project1_mobile.png";
import PROJECTIMG2 from "../images/project2.png";
import PROJECTMOBILEIMG2 from "../images/project2_mobile.png";
import PROJECTIMG3 from "../images/urtv_1.png";
import PROJECTMOBILEIMG3 from "../images/urtv_mobile.png";
import PROJECTIMG4 from "../images/project4.png";
import PROJECTMOBILEIMG4 from "../images/project4_mobile.png";
import DASHBOARD_1 from "../images/dashboard_1.png";
import DASHBOARD_MOBILE from "../images/dashboard_mobile.png";
import PROJECTIMG6 from "../images/project6.png";
import PROJECTMOBILEIMG6 from "../images/project6_mobile.png";
import PROJECTIMG9 from "../images/grocery_1.png";
import PROJECTMOBILEIMG9 from "../images/grocery_mobile.png";
import PROJECTIMG10 from "../images/project10.png";
import PROJECTMOBILEIMG10 from "../images/dashboard_mobile.png";
import PROJECTIMG11 from "../images/project11.png";
import PROJECTMOBILEIMG11 from "../images/project11_mobile.png";
import PROJECTIMG13 from "../images/project13.png";
import PROJECTMOBILEIMG13 from "../images/project13_mobile.png";
import PROJECTIMG15 from "../images/ramadanak_1.png";
import PROJECTMOBILEIMG15 from "../images/ramadanak_mobile.png";

// import skills icons
import HTML from "../images/icons/html.png";
import CSS from "../images/icons/css.png";
import SASS from "../images/icons/sass.png";
import JS from "../images/icons/js.png";
import LARAVEL from "../images/icons/laravel.png";
import PHP from "../images/icons/php.png";
import REACT from "../images/icons/react.png";
import DB from "../images/icons/mysql.png";
import BOOTSTRAP from "../images/icons/bootstrap.png";
import JAVA from "../images/icons/java.png";

import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa6";

// social data
const SocailData = [
 {
  icon: <FaLinkedin />,
  name: "Linkedin",
  class: "linkedin",
  link: "https://www.linkedin.com/in/abdelrahman-sayed-goda-57a20b202/",
  color: "#0077b5",
 },
 {
  icon: <FaGithub />,
  name: "Github",
  class: "github",
  link: "https://github.com/Abdogoda",
  color: "#333",
 },
 {
  icon: <FaEnvelope />,
  name: "Gmail",
  class: "gmail",
  link: "mailto:abdogoda0a@gmail.com",
  color: "#BB001B",
 },
 {
  icon: <FaWhatsapp />,
  name: "Whatsapp",
  class: "whatsapp",
  link: "http://wa.me/+2001019135059",
  color: "#25D366",
 },
];

// project categories
const projectCategories = [
 "All",
 "JavaScript",
 "React",
 "PHP",
 "Laravel",
 "Others",
];

// projects data
const ProjectsData = [
 {
  images: [
   CONTENT_CREATOR_1,
   CONTENT_CREATOR_2,
   CONTENT_CREATOR_3,
   CONTENT_CREATOR_4,
   CONTENT_CREATOR_5,
  ],
  mobileImg: CONTENT_CREATOR_MOBILE,
  languages: [HTML, CSS, BOOTSTRAP, JS, LARAVEL, DB],
  title: "Content Creator",
  slug: "content-creator",
  description:
   "Content Creator is a website portfolio for a content-creator company. The company provides several services with a greate portfolio for these services. The website contains portfolio and admin dashboard for controlling this portfolio. The Website is also multilangual [Arabic, English].",

  githubLink: "https://github.com/Abdogoda/content-creator",
  liveDemoLink: null,
  type: "Laravel",
 },
 {
  images: [
   LARAVEL_SCHOOL_1,
   LARAVEL_SCHOOL_2,
   LARAVEL_SCHOOL_3,
   LARAVEL_SCHOOL_4,
   LARAVEL_SCHOOL_5,],
  mobileImg: LARAVEL_SCHOOL_MOBILE,
  languages: [HTML, CSS, BOOTSTRAP, JS, LARAVEL, DB],
  title: "School Management System",
  slug: "school-management-system",
  description: "This is a web application with expressive, elegant syntax. Features: Multi Authentication (Student - Teacher - Gardian - Admin), Multi Langual (Arabic - English - As many languages as we want), Multi Dashboard, User Permissions, Real Time Actions using Livewire, Integration With Zoom Meeting",
  githubLink: "https://github.com/Abdogoda/laravel_school",
  liveDemoLink: null,
  type: "Laravel",
 },
 {
  images: [DASHBOARD_1],
  mobileImg: DASHBOARD_MOBILE,
  languages: [HTML, CSS, BOOTSTRAP, JS, PHP, DB],
  title: "Admin Dashboard",
  slug: "admin-dashboard",
  description:
   "It's an online book store and its employee dashboard for managing the store dynamically, with full representation of the selling process and controlling the website.",

  githubLink: "https://github.com/Abdogoda/Books",
  liveDemoLink: null,
  type: "PHP",
 },
 {
  images: [PROJECTIMG13],
  mobileImg: PROJECTMOBILEIMG13,
  languages: [HTML, CSS, BOOTSTRAP, JS, PHP, DB],
  title: "Book Store",
  slug: "book-store",
  description:
   "It's a php fullstack online book store making the selling process with all it's features and order details.",
  githubLink: "https://github.com/Abdogoda/Books",
  liveDemoLink: null,
  type: "PHP",
 },
 {
  images: [PROJECTIMG10],
  mobileImg: PROJECTMOBILEIMG10,
  languages: [HTML, CSS, BOOTSTRAP, JS, JAVA, DB],
  title: "Nature",
  slug: "nature",
  description:
   "It's a Java EE fullstack online grocery store and its admin dashboard to control and manage the website and all products and orders.",
  githubLink: "https://github.com/Abdogoda/Nature",
  liveDemoLink: null,
  type: "Others",
 },
 {
  images: [PROJECTIMG15],
  mobileImg: PROJECTMOBILEIMG15,
  languages: [HTML, CSS, BOOTSTRAP, JS],
  title: "Ramadanak",
  slug: "ramadanak",
  description:
   "It's a frontend website about the month of ramadan, which display hadiths, Quranic verses, prayer times, and gifts to friends.",
  githubLink: "https://github.com/Abdogoda/Ramadanak",
  liveDemoLink: "https://abdogoda.github.io/Ramadanak/",
  type: "JavaScript",
 },
 {
  images: [PROJECTIMG3],
  mobileImg: PROJECTMOBILEIMG3,
  languages: [HTML, CSS, BOOTSTRAP, JS, REACT],
  title: "URTV",
  slug: "urtv",
  description:
   "URTV is using IMDB API to showing the diffrent categories of movies up to date.",
  githubLink: "https://github.com/Abdogoda/URTV",
  liveDemoLink: "https://abdogoda.github.io/URTV/",
  type: "React",
 },
 {
  images: [PROJECTIMG4],
  mobileImg: PROJECTMOBILEIMG4,
  languages: [HTML, CSS, BOOTSTRAP, SASS, JS, REACT],
  title: "YOLO Store",
  slug: "yolo-store",
  description:
   "YOLO is an awsome clothe store with good a greate experience and a lot of puety.",
  githubLink: "https://github.com/Abdogoda/Yolo_Store",
  liveDemoLink: "https://abdogoda.github.io/Yolo_Store/",
  type: "React",
 },
 {
  images: [PROJECTIMG6],
  mobileImg: PROJECTMOBILEIMG6,
  languages: [HTML, CSS, BOOTSTRAP, SASS, JS, REACT],
  title: "CALA Store",
  slug: "cala-store",
  description:
   "CALA is an awsome clothe store with good a greate experience and a lot of puety.",
  githubLink: "https://github.com/Abdogoda/CALA_STORE",
  liveDemoLink: "https://abdogoda.github.io/CALA_STORE/",
  type: "React",
 },
 {
  images: [PROJECTIMG1],
  mobileImg: PROJECTMOBILEIMG1,
  title: "BONIK Store",
  slug: "bonik-store",
  languages: [HTML, CSS, SASS, JS, REACT],
  description:
   "Bonik Store Is an online store to sale all products online with a great experience.",
  githubLink: "https://github.com/Abdogoda/Bonik_Store",
  liveDemoLink: "https://abdogoda.github.io/Bonik_Store/",
  type: "React",
 },
 {
  images: [PROJECTIMG2],
  mobileImg: PROJECTMOBILEIMG2,
  languages: [HTML, CSS, JS, REACT],
  title: "VAWELENS",
  slug: "vawelens",
  description:
   "VAWELENS is an online gym care made by react and provides dark and light theme.",
  githubLink: "https://github.com/Abdogoda/Gym-Store",
  liveDemoLink: "https://abdogoda.github.io/Gym-Store/",
  type: "React",
 },

 {
  images: [PROJECTIMG9],
  mobileImg: PROJECTMOBILEIMG9,
  languages: [HTML, CSS, JS, PHP, DB],
  title: "Your Grocery",
  slug: "your-grocery",
  description:
   "Your Grocery is a PHP FullStack project Connected To MYSQL to make a greatfull experience.",
  githubLink: "https://github.com/Abdogoda/Grocery",
  liveDemoLink: null,
  type: "PHP",
 },
 {
  images: [PROJECTIMG11],
  mobileImg: PROJECTMOBILEIMG11,
  languages: [HTML, CSS, JS, PHP, DB],
  title: "PETTY",
  slug: "petty",
  description:
   "PETTY is a PHP FullStack project Connected To MYSQL to make a greatfull experience.",
  githubLink: "https://github.com/Abdogoda/Petty",
  liveDemoLink: null,
  type: "PHP",
 },
];

// about skills
const AboutSkills = [
 { side: "front", img: HTML },
 { side: "back", img: JS },
 { side: "left", img: PHP },
 { side: "right", img: REACT },
 { side: "top", img: CSS },
 { side: "bottom", img: LARAVEL },
];

// about paragraphs
const AboutParagraphs = [
 "Hello! My name is Abdo Goda and i'm a Dedicated and skilled Full Stack PHP Web Developer with a passion for creating dynamic and user-friendly web applications.",
 "I'm seeking a position where I can leverage my expertise to contribute to the success of a forward-thinking organization. Committed to delivering high-quality code, meeting deadlines, and continuously expanding my technical skills to stay at the forefront of industry trends.",
];

export {
 SocailData,
 projectCategories,
 ProjectsData,
 AboutSkills,
 AboutParagraphs,
};
