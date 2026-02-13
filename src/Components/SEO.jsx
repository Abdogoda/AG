import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "AG Portfolio", 
  description = "Abdulrhman Goda - Software Engineer specializing in Laravel, PHP, React, and JavaScript with 40+ completed projects", 
  keywords = "Full Stack Developer, Laravel Developer, PHP Developer, React Developer, JavaScript, Web Development",
  url = "https://Abdogoda.github.io/AG/",
  image = "https://Abdogoda.github.io/AG/og-image.jpg",
  type = "website",
}) => {
  const siteTitle = title === "AG Portfolio" ? title : `${title} | AG Portfolio`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;