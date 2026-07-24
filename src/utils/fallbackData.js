// Fallback Data - Default data used when API/fetch requests fail
// Provides a graceful degradation experience instead of showing errors

export const fallbackDataMap = {
  about: {
    paragraphs: [
      "I'm a dedicated and skilled Full Stack Developer with a passion for creating dynamic and user-friendly web applications. With expertise in Laravel, PHP, React, and JavaScript, I bring ideas to life through clean, efficient code.",
      'I specialize in building robust backend systems with Laravel and PHP, while also crafting beautiful, responsive user interfaces with modern frontend technologies like React. My experience spans across web development, API design, and database optimization.',
      "Whether working on complex eCommerce platforms, content management systems, or real-time applications, I'm committed to delivering high-quality solutions that meet business needs and exceed user expectations.",
      "When I'm not coding, you can find me creating educational content on YouTube, exploring new technologies, or contributing to open-source projects. Feel free to reach out - I'm always interested in collaborating on exciting projects!",
    ],
    skills: {
      backend: ['Laravel', 'PHP', 'MySQL', 'REST APIs'],
      frontend: ['React', 'JavaScript', 'HTML', 'CSS', 'Sass'],
      tools: ['Git', 'VS Code', 'Docker', 'Bootstrap'],
    },
  },

  projects: {
    projects: [
      {
        id: 1,
        title: 'Portfolio Website',
        slug: 'portfolio-website',
        description:
          'A modern, responsive portfolio website showcasing web development projects and skills. Built with React and SASS.',
        type: 'Full Stack',
        languages: ['react', 'javascript', 'sass'],
        githubLink: 'https://github.com',
        liveLink: 'https://example.com',
        images: [],
        featured: true,
      },
    ],
    categories: ['Full Stack', 'Frontend', 'Backend', 'eCommerce'],
  },

  pages: [
    {
      pageName: 'Home',
      pagePath: '/',
      icon: 'FaHome',
    },
    {
      pageName: 'About',
      pagePath: '/about',
      icon: 'FaUser',
    },
    {
      pageName: 'Projects',
      pagePath: '/projects',
      icon: 'FaCode',
    },
    {
      pageName: 'YouTube',
      pagePath: '/youtube',
      icon: 'FaYoutube',
    },
    {
      pageName: 'Contact',
      pagePath: '/contact',
      icon: 'FaPhone',
    },
  ],

  social: [
    {
      name: 'LinkedIn',
      link: 'https://linkedin.com',
      icon: 'FaLinkedin',
    },
    {
      name: 'GitHub',
      link: 'https://github.com',
      icon: 'FaGithub',
    },
    {
      name: 'YouTube',
      link: 'https://youtube.com',
      icon: 'FaYoutube',
    },
    {
      name: 'Email',
      link: 'mailto:contact@example.com',
      icon: 'FaEnvelope',
    },
  ],
};

/**
 * Get fallback data for a specific data file
 * @param {string} dataFile - Name of the data file (about, projects, pages, social)
 * @returns {object} Fallback data for the requested file
 */
export const getFallbackData = (dataFile) => {
  const fallbackData = fallbackDataMap[dataFile];

  if (!fallbackData) {
    console.warn(`No fallback data defined for "${dataFile}"`);
    return {};
  }

  return fallbackData;
};

/**
 * YouTube API Fallback Data
 */
export const youTubeFallbacks = {
  channelInfo: {
    id: 'UCmGfAOZOAgYZZ_fj_GgzB2Q',
    title: 'Abdulrhman Goda',
    description:
      'Web Development Tutorials - Laravel, React, PHP, and JavaScript tutorials for beginners and advanced developers.',
    customUrl: '@Abdulrhman-Goda',
    publishedAt: '2020-01-01T00:00:00Z',
    thumbnails: {
      default: { url: `${process.env.PUBLIC_URL || ''}/images/projects/authentication-system/1.png`, width: 88, height: 88 },
      medium: { url: `${process.env.PUBLIC_URL || ''}/images/projects/authentication-system/1.png`, width: 240, height: 240 },
      high: { url: `${process.env.PUBLIC_URL || ''}/images/projects/authentication-system/1.png`, width: 800, height: 800 },
    },
    country: 'EG',
    viewCount: '1000000',
    subscriberCount: '50000',
    videoCount: '200',
    keywords: 'web development, laravel, react, php, javascript',
    bannerExternalUrl: '',
  },

  playlists: [
    {
      id: 'playlist1',
      title: 'Laravel Tutorials',
      description:
        'Complete Laravel framework tutorials from basics to advanced topics',
      publishedAt: '2023-01-01T00:00:00Z',
      thumbnails: {
        default: { url: `${process.env.PUBLIC_URL || ''}/images/projects/authentication-system/1.png`, width: 120, height: 90 },
        medium: { url: `${process.env.PUBLIC_URL || ''}/images/projects/authentication-system/1.png`, width: 320, height: 180 },
        high: { url: `${process.env.PUBLIC_URL || ''}/images/projects/authentication-system/1.png`, width: 480, height: 360 },
      },
      itemCount: 50,
      slug: 'laravel-tutorials',
      playlistUrl: 'https://www.youtube.com/playlist?list=playlist1',
      totalDuration: '25h 30m',
    },
    {
      id: 'playlist2',
      title: 'React for Beginners',
      description: 'Learn React.js from scratch with practical examples',
      publishedAt: '2023-02-01T00:00:00Z',
      thumbnails: {
        default: { url: `${process.env.PUBLIC_URL || ''}/images/projects/game-hub/1.png`, width: 120, height: 90 },
        medium: { url: `${process.env.PUBLIC_URL || ''}/images/projects/game-hub/1.png`, width: 320, height: 180 },
        high: { url: `${process.env.PUBLIC_URL || ''}/images/projects/game-hub/1.png`, width: 480, height: 360 },
      },
      itemCount: 40,
      slug: 'react-for-beginners',
      playlistUrl: 'https://www.youtube.com/playlist?list=playlist2',
      totalDuration: '18h 45m',
    },
  ],

  videos: [
    {
      id: 'video1',
      title: 'Getting Started with Web Development',
      description: 'Learn the basics of modern web development',
      publishedAt: '2024-01-01T00:00:00Z',
      thumbnails: {
        default: { url: `${process.env.PUBLIC_URL || ''}/images/projects/store/1.png`, width: 120, height: 90 },
        medium: { url: `${process.env.PUBLIC_URL || ''}/images/projects/store/1.png`, width: 320, height: 180 },
        high: { url: `${process.env.PUBLIC_URL || ''}/images/projects/store/1.png`, width: 480, height: 360 },
      },
      videoUrl: 'https://www.youtube.com/watch?v=video1',
      duration: 'PT15M30S',
      viewCount: '50000',
      likeCount: '2500',
    },
  ],
};

/**
 * Get YouTube API fallback data
 * @param {string} type - Type of fallback data (channelInfo, playlists, videos)
 * @returns {object|array} Fallback YouTube data
 */
export const getYouTubeFallback = (type) => {
  const fallback = youTubeFallbacks[type];

  if (!fallback) {
    console.warn(`No YouTube fallback data defined for type "${type}"`);
    return type === 'playlists' || type === 'videos' ? [] : {};
  }

  return fallback;
};

const fallbackDataService = {
  getFallbackData,
  getYouTubeFallback,
  fallbackDataMap,
  youTubeFallbacks,
};

export default fallbackDataService;
