/**
 * Utility function to get the correct image URL with PUBLIC_URL
 * @param {string} imagePath - The image path (e.g., '/images/projects/kashier/1.png')
 * @returns {string} - The full URL with PUBLIC_URL prepended
 */
export const getImageUrl = (imagePath) => {
  if (!imagePath) return '';
  const basePath = process.env.PUBLIC_URL || '';
  // Remove leading slash if present to avoid double slashes
  const cleanPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  return `${basePath}/${cleanPath}`;
};

export default getImageUrl;
