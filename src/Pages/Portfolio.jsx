import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import AnimatedLetters from '../Components/AnimatedLetters';
import SEO from '../Components/SEO';
import LoadingLayout from '../Components/LoadingLayout';
import useData from '../hooks/useData';
import ProjectBox from '../Components/ProjectBox';
import ProjectsFilter from '../Components/ProjectsFilter';

function Portfolio() {
  const { data: projectsData, loading, error } = useData('projects');
  const [activeCategory, setActiveCategory] = useState(0);
  const [projectsList, setProjectsList] = useState([]);
  const [categoryActiveChange, setCategoryActiveChange] = useState(false);

  // letter animation
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  // projects effect
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width:552px)');
    if (!mediaQuery.matches) {
      document.querySelectorAll('.project__box').forEach((projectBox) => {
        const card = projectBox.querySelector('.project__box__card');
        const light = projectBox.querySelector('.project__box__light');

        let { x, y, width, height } = projectBox.getBoundingClientRect();
        function mouseMove(e) {
          const left = e.clientX - x;
          const top = e.clientY - y;
          const centerX = left - width / 2;
          const centerY = top - height / 2;
          const d = Math.sqrt(centerX ** 2 + centerY ** 2);
          card.style.boxShadow = `${-centerX / 5}px ${-centerY / 10}px 10px rgba(0, 0, 0, 0.2)`;
          const division = e.clientY > 150 ? e.clientY / 5 : 5;
          card.style.transform = `rotate3d(${-centerY / 100}, ${centerX / 100}, 0, ${d / division}deg)`;
          light.style.backgroundImage = `radial-gradient(circle at ${left}px ${top}px, #00000040, #ffffff00, #ffffff99)`;
        }

        projectBox.addEventListener('mouseenter', () => {
          projectBox.addEventListener('mousemove', mouseMove);
        });

        projectBox.addEventListener('mouseleave', () => {
          projectBox.removeEventListener('mousemove', mouseMove);
          card.style.boxShadow = '';
          card.style.transform = '';
          light.style.backgroundImage = '';
        });

        window.addEventListener('resize', () => {
          var rect = projectBox.getBoundingClientRect();
          x = rect.x;
          y = rect.y;
          width = rect.width;
          height = rect.height;
        });
      });
    }
  });

  // filter projects
  useEffect(() => {
    if (!projectsData?.projects) return;

    const filterProject = () => {
      if (activeCategory === 0) {
        setProjectsList(projectsData.projects);
      } else {
        if (
          projectsData.categories.length > activeCategory &&
          activeCategory !== 0
        ) {
          var newList = projectsData.projects.filter(
            (obj) => obj.type === projectsData.categories[activeCategory]
          );
          setProjectsList(newList);
        }
      }
    };

    if (activeCategory !== 0) {
      setCategoryActiveChange(true);
    }
    setProjectsList([]);
    filterProject();
  }, [activeCategory, projectsData]);

  if (loading) return <LoadingLayout />;
  if (error) return <p>Error loading projects: {error}</p>;

  return (
    <>
      <SEO
        title="AG | Portfolio Projects"
        description="Explore 40+ web development projects by Abdulrhman Goda including Laravel applications, React projects, eCommerce solutions, and more. Filter by technology: Laravel, PHP, React, JavaScript."
        keywords="Web Development Portfolio, Laravel Projects, React Projects, PHP Development, JavaScript Projects, eCommerce Development, Full Stack Projects"
        url="https://Abdogoda.github.io/AG/projects"
      />
      <LoadingLayout />
      <Header />
      <Sidebar />
      <main className="section portfolio__section" id="portfolio">
        <div className="container portfolio__container container__flex__column">
          <h1 className="section__title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'M',
                'y',
                ' ',
                'R',
                'e',
                'c',
                'e',
                'n',
                't',
                ' ',
                'W',
                'o',
                'r',
                'k',
              ]}
              index={22}
            />
          </h1>
          <ProjectsFilter
            categories={projectsData?.categories || []}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
          <div className="projects__container">
            {projectsList.map((projectData, index) => {
              return (
                <ProjectBox
                  project={projectData}
                  index={index}
                  key={index}
                  delay={categoryActiveChange ? 0 : 1.6}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default Portfolio;
