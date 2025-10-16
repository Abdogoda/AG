import { FaEnvelope, FaEye, FaHome, FaUser, FaYoutube } from "react-icons/fa";
const PagesData = [
 {
  pageName: "HOME",
  pageID: "home",
  pagePath: "/",
  pageIcon: <FaHome />,
 },
 {
  pageName: "ABOUT",
  pageID: "about",
  pagePath: "/about",
  pageIcon: <FaUser />,
 },
 {
  pageName: "PROJECTS",
  pageID: "projects",
  pagePath: "/projects",
  pageIcon: <FaEye />,
 },
 {
  pageName: "YOUTUBE",
  pageID: "youtube",
  pagePath: "/youtube",
  pageIcon: <FaYoutube />,
 },
 {
  pageName: "CONTACT",
  pageID: "contact",
  pagePath: "/contact",
  pageIcon: <FaEnvelope />,
 },
];
export default PagesData;
