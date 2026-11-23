import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaEye,
  FaYoutube,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';

// Map icon names to icon components
const iconMap = {
  FaHome,
  FaUser,
  FaBriefcase,
  FaGraduationCap,
  FaEye,
  FaYoutube,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
};

export const getIcon = (iconName) => {
  return iconMap[iconName] || null;
};

export default iconMap;
