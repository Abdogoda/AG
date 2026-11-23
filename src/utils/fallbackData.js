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

  experience: {
    categories: ['All', 'Work', 'Education'],
    stats: [
      { label: 'Years Experience', value: '2+' },
      { label: 'Client & Enterprise Projects', value: '20+' },
      { label: 'Companies & Roles', value: '5' },
      { label: 'Academic Cohort Rank', value: 'Top 4' },
    ],
    experiences: [
      {
        id: 'exp-jt',
        category: 'Work',
        role: 'API Integration Specialist',
        company: 'J&T Express',
        companyType: 'Full-time',
        workplaceType: 'On-site',
        location: 'Cairo, Egypt',
        period: 'Sep 2026 – Present',
        duration: '3 mos',
        current: true,
        logoColor: '#e60012',
        companyInitial: 'J&T',
        description:
          'Leading enterprise logistics API integrations, webhook automations, and high-concurrency data exchange pipelines for international logistics operations.',
        highlights: [
          'Architecting and integrating mission-critical B2B APIs for enterprise e-commerce partners and carrier systems.',
          'Engineering reliable webhook listeners and asynchronous task queues for real-time parcel lifecycle tracking and status sync.',
          'Optimizing payload processing, automated reconciliation, and error recovery protocols ensuring zero data loss across high-volume pipelines.',
          'Partnering with technical operations and cross-functional engineering teams to maintain seamless system uptime and compliance.',
        ],
        technologies: [
          'RESTful APIs',
          'API Architecture',
          'Webhooks',
          'JSON/XML',
          'Postman',
          'System Integration',
          'Data Reconciliation',
          'Queue Workers',
        ],
      },
      {
        id: 'exp-brmja',
        category: 'Work',
        role: 'Back End Developer',
        company: 'Brmja Tech',
        companyType: 'Full-time',
        workplaceType: 'Hybrid',
        location: 'Cairo, Egypt',
        period: 'Jul 2026 – Sep 2026',
        duration: '3 mos',
        current: false,
        logoColor: '#ff9800',
        companyInitial: 'BT',
        description:
          'Built resilient backend architectures, scalable microservices, and database optimization strategies for client web solutions.',
        highlights: [
          'Engineered scalable RESTful API services following MVC patterns, SOLID principles, and clean architecture standards.',
          'Modeled efficient relational schemas in MySQL/PostgreSQL, reducing execution bottlenecks and query latencies.',
          'Implemented robust authentication & authorization layers (JWT, OAuth2, RBAC) for role-sensitive applications.',
          'Collaborated with frontend and product teams in an agile setting, accelerating release cadences.',
        ],
        technologies: [
          'PHP',
          'Laravel',
          'MySQL',
          'RESTful APIs',
          'JWT / RBAC',
          'Git',
          'Postman',
          'Redis',
        ],
      },
      {
        id: 'exp-freelance',
        category: 'Work',
        role: 'Software Engineer',
        company: 'Freelancer',
        companyType: 'Freelance',
        workplaceType: 'Remote',
        location: 'Remote',
        period: 'Jul 2025 – Jun 2026',
        duration: '1 yr',
        current: false,
        logoColor: '#45f3ff',
        companyInitial: 'AG',
        description:
          'Delivered end-to-end full-stack web applications, custom management dashboards, and AI-integrated platforms for international businesses.',
        highlights: [
          'Delivered 15+ production-grade web applications using Laravel, PHP, MySQL, and modern JavaScript/React.',
          'Engineered custom admin dashboards, automated payment gateway integrations (Paymob, Stripe), and notification engines.',
          'Integrated AI-assisted development tools and intelligent APIs to accelerate delivery speed and elevate code reliability.',
          'Handled direct client discovery, requirement specifications, architecture design, and cloud deployments.',
        ],
        technologies: [
          'Laravel',
          'PHP',
          'React',
          'JavaScript',
          'REST APIs',
          'MySQL',
          'Docker',
          'HTML5',
          'CSS3',
          'Payment Gateways',
          'AI Integration',
        ],
      },
      {
        id: 'exp-teradeveloper',
        category: 'Work',
        role: 'Web Developer',
        company: 'Teradeveloper',
        companyType: 'Full-time',
        workplaceType: 'Remote',
        location: 'Alexandria, Egypt',
        period: 'Nov 2024 – Feb 2025',
        duration: '4 mos',
        current: false,
        logoColor: '#00d2d3',
        companyInitial: 'TD',
        description:
          'Developed and maintained high-performance backend systems in Laravel, integrating seamless data contracts with Angular frontend clients.',
        highlights: [
          'Developed and maintained scalable backend systems and services using Laravel framework.',
          'Designed and standardized RESTful APIs for efficient, type-safe client-server communication with Angular frontend.',
          'Refactored legacy endpoints, cutting payload sizes and improving response times by over 30%.',
          'Collaborated on code reviews, continuous integration workflows, and production deployments.',
        ],
        technologies: [
          'Laravel',
          'PHP',
          'Angular',
          'RESTful APIs',
          'MySQL',
          'HTML5',
          'CSS3',
          'Postman',
          'Git',
        ],
      },
      {
        id: 'exp-heda',
        category: 'Work',
        role: 'Full Stack Web Developer',
        company: 'Heda.firm',
        companyType: 'Full-time',
        workplaceType: 'Hybrid',
        location: 'Cairo, Egypt',
        period: 'Sep 2024 – Jan 2025',
        duration: '5 mos',
        current: false,
        logoColor: '#2980b9',
        companyInitial: 'HF',
        description:
          'Updated, secured, and maintained enterprise web applications, resolving critical production issues and optimizing core database performance.',
        highlights: [
          'Updated and maintained enterprise web applications, ensuring continuous uptime and smooth operational functionality.',
          'Identified database bottlenecks and optimized complex relational queries, reducing server overhead during peak traffic.',
          'Diagnosed and resolved critical software bugs and performance regressions in live production environments.',
          'Implemented full-stack feature enhancements spanning PHP backend logic and responsive frontend user interfaces.',
        ],
        technologies: [
          'PHP',
          'Laravel',
          'MySQL',
          'Query Optimization',
          'JavaScript',
          'HTML5',
          'CSS3',
          'Full Stack Development',
        ],
      },
      {
        id: 'exp-education',
        category: 'Education',
        role: 'Bachelor in Computer Engineering',
        company: 'Modern Academy for Engineering & Technology',
        companyType: 'Higher Education',
        workplaceType: 'On-site',
        location: 'Cairo, Egypt',
        period: '2019 – 2024',
        duration: '5 yrs',
        current: false,
        logoColor: '#9b59b6',
        companyInitial: 'MA',
        description:
          '5-year intensive engineering degree specializing in Software Engineering, Computer Vision, Distributed Systems, and Advanced Algorithms.',
        highlights: [
          'Cumulative GPA: 3.41 — Ranked 4th in Cohort.',
          'Graduation Project: Grade A+ (AI-powered Computer Vision & Diagnostic System).',
          'Core competencies: Data Structures, Algorithms, Object-Oriented Programming (OOP), SOLID Principles, System Architecture, Operating Systems.',
        ],
        technologies: [
          'Software Architecture',
          'Algorithms',
          'Data Structures',
          'Computer Vision',
          'Python',
          'C++',
          'OOP',
          'Database Design',
        ],
      },
    ],
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
      pageName: 'Experience',
      pagePath: '/experience',
      icon: 'FaBriefcase',
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
