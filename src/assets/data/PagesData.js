import { FaEnvelope, FaEye, FaHome, FaUser } from "react-icons/fa";
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
  pageName: "CONTACT",
  pageID: "contact",
  pagePath: "/contact",
  pageIcon: <FaEnvelope />,
 },
];
export default PagesData;
