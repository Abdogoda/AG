import React, { useEffect, useState, useMemo, useRef } from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import AnimatedLetters from '../Components/AnimatedLetters';
import SEO from '../Components/SEO';
import LoadingLayout from '../Components/LoadingLayout';
import { Link } from 'react-router-dom';
import useData from '../hooks/useData';
import getImageUrl from '../utils/imageUrl';
import {
  FaBriefcase,
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaLaptopCode,
  FaAward,
  FaSearch,
  FaBolt,
  FaCheckCircle,
} from 'react-icons/fa';

function Experience() {
  const { data: expData, loading, error } = useData('experience');
  const { data: aboutData } = useData('about');
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleItems, setVisibleItems] = useState({});
  const rowRefs = useRef({});
  const timelineRef = useRef(null);

  // Letter animation (matching other pages)
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Pre-reveal top visible items so above-the-fold content shows immediately
  useEffect(() => {
    if (expData?.experiences && expData.experiences.length > 0) {
      const topItems = {};
      expData.experiences.slice(0, 2).forEach((exp, i) => {
        topItems[exp.id || `exp-${i}`] = true;
      });
      setVisibleItems((prev) => ({ ...topItems, ...prev }));
    }
  }, [expData]);

  // IntersectionObserver for animation on scroll
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-id');
          if (id) {
            setVisibleItems((prev) => ({ ...prev, [id]: true }));
          }
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const currentRefs = rowRefs.current;
    Object.values(currentRefs).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      Object.values(currentRefs).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [expData, activeCategory, searchQuery]);

  // Spotlight mouse effect on cards
  useEffect(() => {
    if (!timelineRef.current) return;
    const cards = timelineRef.current.querySelectorAll('.experience__card');

    const handleMouseMove = (e) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [expData, activeCategory, searchQuery]);

  const categories = useMemo(() => {
    return expData?.categories || ['All', 'Work', 'Education'];
  }, [expData]);

  const stats = useMemo(() => {
    return (
      expData?.stats || [
        { label: 'Years Experience', value: '2+' },
        { label: 'Client & Enterprise Projects', value: '20+' },
        { label: 'Companies & Roles', value: '5' },
        { label: 'Academic Cohort Rank', value: 'Top 4' },
      ]
    );
  }, [expData]);

  const categoryCounts = useMemo(() => {
    const counts = { All: expData?.experiences?.length || 0 };
    if (expData?.experiences) {
      expData.experiences.forEach((item) => {
        const cat = item.category || 'Work';
        counts[cat] = (counts[cat] || 0) + 1;
      });
    }
    return counts;
  }, [expData]);

  const filteredExperiences = useMemo(() => {
    if (!expData?.experiences) return [];
    return expData.experiences.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' ||
        item.category?.toLowerCase() === activeCategory.toLowerCase();

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const roleMatch = item.role?.toLowerCase().includes(q);
      const companyMatch = item.company?.toLowerCase().includes(q);
      const techMatch = item.technologies?.some((t) =>
        t.toLowerCase().includes(q)
      );
      const descMatch = item.description?.toLowerCase().includes(q);

      return roleMatch || companyMatch || techMatch || descMatch;
    });
  }, [expData, activeCategory, searchQuery]);

  if (loading) return <LoadingLayout />;
  if (error && !expData) {
    return <p className="error-message">Error loading experience: {error}</p>;
  }

  const resumeUrl = getImageUrl(
    aboutData?.resumeLink || 'data/abdogoda-resume.pdf'
  );

  return (
    <>
      <SEO
        title="AG | Experience & Career Journey - Abdulrhman Goda"
        description="Discover the verified work experience, software engineering roles, and academic accomplishments of Abdulrhman Goda at J&T Express, Brmja Tech, Freelance, Teradeveloper, and Heda.firm."
        keywords="Abdulrhman Goda Experience, API Integration Specialist, J&T Express Developer, Backend Developer Cairo, Laravel Engineer, Fullstack Web Developer, Modern Academy"
        url="https://Abdogoda.github.io/AG/experience"
      />
      <LoadingLayout />
      <Header />
      <Sidebar />
      <main className="section experience__section" id="experience">
        <div className="container experience__container">
          {/* Header Title & Intro */}
          <div className="experience__header">
            <h1 className="section__title">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
                index={22}
              />
            </h1>
            <p className="experience__subtitle">
              A curated timeline of verified enterprise roles, engineering impact,
              and academic honors — driving clean software architecture from concept
              to production.
            </p>

            {/* Quick Metrics & Stats Grid (animated like About page) */}
            <div className="experience__stats__grid">
              {stats.map((stat, idx) => (
                <div
                  className="experience__stat__card"
                  key={idx}
                  style={{ animationDelay: `${0.12 * idx + 1.3}s` }}
                >
                  <div className="stat__glow"></div>
                  <span className="stat__value">{stat.value}</span>
                  <span className="stat__label">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Search & Category Filter Controls */}
            <div className="experience__controls">
              <div className="experience__filters">
                {categories.map((cat, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`experience__filter__btn ${
                      activeCategory === cat ? 'active' : ''
                    }`}
                    onClick={() => setActiveCategory(cat)}
                  >
                    {cat === 'Work' && <FaBriefcase className="filter__icon" />}
                    {cat === 'Education' && (
                      <FaGraduationCap className="filter__icon" />
                    )}
                    {cat === 'All' && <FaBolt className="filter__icon" />}
                    <span className="btn__text">{cat}</span>
                    <span className="btn__count">
                      {categoryCounts[cat] || 0}
                    </span>
                  </button>
                ))}
              </div>

              <div className="experience__search__wrap">
                <FaSearch className="search__icon" />
                <input
                  type="text"
                  placeholder="Filter by role, company, or tech..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="experience__search__input"
                  aria-label="Filter experience"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="search__clear"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Timeline Container with Flex Layout and Scroll Reveal */}
          <div className="experience__timeline" ref={timelineRef}>
            {filteredExperiences.length === 0 ? (
              <div className="experience__empty">
                <p>No experiences match "{searchQuery}".</p>
                <button
                  type="button"
                  className="main__button"
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('All');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredExperiences.map((exp, index) => {
                const isWork = exp.category?.toLowerCase() === 'work';
                const rowId = exp.id || `exp-${index}`;
                const isVisible = visibleItems[rowId];
                const isLast = index === filteredExperiences.length - 1;

                return (
                  <div
                    className={`timeline__row ${exp.current ? 'is__current' : ''} ${
                      isVisible ? 'is__visible' : 'is__hidden'
                    }`}
                    key={rowId}
                    data-id={rowId}
                    ref={(el) => (rowRefs.current[rowId] = el)}
                  >
                    {/* Reliable Flex Spine Column */}
                    <div className="timeline__spine">
                      <div
                        className={`spine__node ${
                          exp.current ? 'spine__node--current' : ''
                        }`}
                        title={exp.period}
                      >
                        {isWork ? <FaBriefcase /> : <FaGraduationCap />}
                        {exp.current && <span className="pulse__wave"></span>}
                      </div>
                      {!isLast && <div className="spine__line"></div>}
                    </div>

                    {/* Creative Experience Card */}
                    <div className="experience__card">
                      {/* Dynamic Spotlight Radial Gradient */}
                      <div className="card__spotlight"></div>

                      <div className="card__inner">
                        {/* Header: Company Avatar + Role + Badges */}
                        <div className="card__header">
                          <div className="company__brand">
                            <div
                              className="company__logo__badge"
                              style={{
                                '--brand-color': exp.logoColor || '#45f3ff',
                              }}
                            >
                              <span>{exp.companyInitial || 'AG'}</span>
                            </div>
                            <div className="role__meta">
                              <h2 className="role__title">{exp.role}</h2>
                              <div className="company__row">
                                <span className="company__name">
                                  {exp.company}
                                </span>
                                {exp.companyType && (
                                  <span className="badge badge--type">
                                    {exp.companyType}
                                  </span>
                                )}
                                {exp.workplaceType && (
                                  <span className="badge badge--mode">
                                    {exp.workplaceType}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Time & Location Metadata */}
                          <div className="period__meta">
                            {exp.current && (
                              <span className="badge badge--present">
                                <span className="live__dot"></span> Present
                              </span>
                            )}
                            <div className="period__badge">
                              <FaCalendarAlt className="meta__icon" />
                              <span>{exp.period}</span>
                              {exp.duration && (
                                <span className="duration__tag">
                                  · {exp.duration}
                                </span>
                              )}
                            </div>
                            {exp.location && (
                              <div className="location__badge">
                                <FaMapMarkerAlt className="meta__icon" />
                                <span>{exp.location}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Summary Description */}
                        <p className="card__description">{exp.description}</p>

                        {/* Accomplishments & Responsibilities */}
                        {exp.highlights && exp.highlights.length > 0 && (
                          <div className="card__highlights">
                            <div className="highlights__title">
                              <FaAward className="highlight__icon" />
                              <span>Key Impact & Accomplishments:</span>
                            </div>
                            <ul className="highlights__list">
                              {exp.highlights.map((highlight, hIdx) => (
                                <li
                                  key={hIdx}
                                  style={{
                                    transitionDelay: isVisible
                                      ? `${0.08 * hIdx + 0.2}s`
                                      : '0s',
                                  }}
                                >
                                  <FaCheckCircle className="check__bullet" />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Tech Stack Chips */}
                        {exp.technologies && exp.technologies.length > 0 && (
                          <div className="card__tech">
                            <div className="tech__label">
                              <FaLaptopCode className="tech__icon" />
                              <span>Skills & Technologies:</span>
                            </div>
                            <div className="tech__tags">
                              {exp.technologies.map((tech, tIdx) => (
                                <span
                                  key={tIdx}
                                  className={`tech__tag ${
                                    searchQuery &&
                                    tech
                                      .toLowerCase()
                                      .includes(searchQuery.toLowerCase())
                                      ? 'matched'
                                      : ''
                                  }`}
                                  onClick={() => setSearchQuery(tech)}
                                  title={`Filter by ${tech}`}
                                  style={{
                                    transitionDelay: isVisible
                                      ? `${0.04 * tIdx + 0.3}s`
                                      : '0s',
                                  }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Action CTAs */}
          <div className="experience__actions">
            <a href={resumeUrl} download className="main__button">
              Download Full Resume (CV)
            </a>
            <Link to="/contact" className="main__button ml-1">
              Hire Abdulrhman
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Experience;
