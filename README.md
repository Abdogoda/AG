# 🚀 AG Portfolio - Abdulrhman Goda

A modern, responsive portfolio website showcasing the work and expertise of **Abdulrhman Goda**, a Full Stack Software Engineer specializing in web development. This portfolio features 40+ projects built with technologies including Laravel, PHP, React, JavaScript, and more.

## 🌐 Live Demo

Visit the live portfolio: [https://Abdogoda.github.io/AG](https://Abdogoda.github.io/AG)

## ✨ Features

- **Interactive Home Page** - Animated welcome section with typewriter effect
- **Project Showcase** - Browse 40+ web development projects with filtering by technology
- **Portfolio Gallery** - Visual project galleries with images and details
- **About Me** - Detailed background and skills visualization with 3D canvas
- **Contact Form** - Email integration for direct communication
- **Blog Section** - YouTube playlist integration and video content
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **SEO Optimized** - Structured data and meta tags for better search visibility
- **Dark Theme** - Modern dark UI with smooth animations
- **Performance Optimized** - Lazy loading, caching, and optimized assets

## 🛠️ Technology Stack

### Frontend
- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **SASS/SCSS** - Styling
- **React Icons** - Icon library
- **Animate.css** - CSS animations
- **tsparticles** - Particle animations

### Features & Libraries
- **react-simple-typewriter** - Typewriter text effect
- **react-helmet-async** - Meta tags management
- **@emailjs/browser** - Email functionality
- **TagCanvas** - 3D text canvas visualization

### Build & Deployment
- **Create React App** - Development setup
- **GitHub Pages** - Hosting and deployment

## 📁 Project Structure

```
├── public/
│   ├── data/              # JSON data files (projects, about, social links)
│   ├── images/            # Project screenshots and assets
│   └── index.html         # HTML entry point
├── src/
│   ├── Components/        # Reusable React components
│   ├── Pages/            # Page components (Home, Portfolio, Project, etc.)
│   ├── hooks/            # Custom React hooks
│   ├── contexts/         # React context providers
│   ├── services/         # API and external services
│   ├── sass/             # SCSS stylesheets
│   ├── utils/            # Utility functions
│   ├── assets/           # Fonts and static assets
│   ├── App.js            # Main App component
│   └── index.js          # React DOM render
└── package.json          # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Abdogoda/AG.git
cd AG
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

### `npm start`
Runs the app in development mode with hot reloading.

### `npm run build`
Builds the app for production to the `build` folder with optimizations.

### `npm run deploy`
Deploys the built app to GitHub Pages.

### `npm test`
Launches the test runner in interactive mode.

## 📊 Pages Overview

- **Home** - Landing page with introduction and call-to-action
- **Portfolio** - Curated selection of featured projects
- **Projects** - Complete project showcase with filtering capabilities
- **Project Details** - Individual project pages with images and descriptions
- **About** - Personal background and skills visualization
- **YouTube** - Video content and playlist integration
- **Contact** - Get in touch form with email integration
- **Login** - Authentication page

## 🎨 Customization

### Update Personal Data
Edit files in `public/data/`:
- `about.json` - Update bio and skills
- `projects.json` - Add or modify project listings
- `social.json` - Update social media links

### Styling
All styles are in `src/sass/` organized by page:
- `_home.scss`
- `_portfolio.scss`
- `_project.scss`
- `_about.scss`
- `_contact.scss`
- etc.

## 🚀 Deployment

This project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

Make sure to update the `homepage` field in `package.json` to match your GitHub Pages URL.

## 📧 Contact & Social

For inquiries and collaborations, visit the portfolio website or use the contact form.

## 📄 License

This project is open source and available under the MIT License.

## 🙌 Credits

Built with React and modern web technologies. Styled with SASS and animated with CSS animations and canvas effects.
