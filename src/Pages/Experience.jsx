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
  FaCheckCircle,
} from 'react-icons/fa';

// Animated Counter for Stats
function AnimatedStatValue({ value }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const match = value.match(/^(\D*)(\d+)(\D*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1] || '';
    const targetNum = parseInt(match[2], 10);
    const suffix = match[3] || '';

    // Delay start until after loader finishes (1.6s)
    const startTimer = setTimeout(() => {
      let start = 0;
      const duration = 1200; // ms
      const stepTime = 30;
      const totalSteps = Math.ceil(duration / stepTime);
      const stepIncrement = targetNum / totalSteps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        start += stepIncrement;
        if (currentStep >= totalSteps || start >= targetNum) {
          setDisplayValue(`${prefix}${targetNum}${suffix}`);
          clearInterval(timer);
        } else {
          setDisplayValue(`${prefix}${Math.floor(start)}${suffix}`);
        }
      }, stepTime);
    }, 1500);

    return () => clearTimeout(startTimer);
  }, [value]);

  return <span className="stat__value">{displayValue}</span>;
}

function Experience() {
  const { data: expData, loading, error } = useData('experience');
  const { data: aboutData } = useData('about');
  const [hasInitiallyLoaded, setHasInitiallyLoaded] = useState(false);
  const timelineRef = useRef(null);

  // Synchronize with loader duration on first mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasInitiallyLoaded(true);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  // Letter animation (matching other pages)
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Animate cards on scroll: IntersectionObserver + Window scroll listener
  useEffect(() => {
    if (!hasInitiallyLoaded) return;

    const handleScrollReveal = () => {
      const rows = document.querySelectorAll('.timeline__row');
      const triggerBottom = (window.innerHeight || document.documentElement.clientHeight) * 0.92;

      rows.forEach((row) => {
        const rowTop = row.getBoundingClientRect().top;
        if (rowTop < triggerBottom) {
          row.classList.add('is__visible');
        }
      });
    };

    // Immediate check
    handleScrollReveal();
    const rafId = requestAnimationFrame(handleScrollReveal);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is__visible');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.05,
      }
    );

    const rows = document.querySelectorAll('.timeline__row');
    rows.forEach((row) => observer.observe(row));

    window.addEventListener('scroll', handleScrollReveal, { passive: true });
    window.addEventListener('resize', handleScrollReveal, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollReveal);
      window.removeEventListener('resize', handleScrollReveal);
    };
  }, [hasInitiallyLoaded, expData]);

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

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
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

  const experiences = useMemo(() => {
    return expData?.experiences || [];
  }, [expData]);

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

            {/* Animated Metrics & Stats Grid */}
            <div className="experience__stats__grid">
              {stats.map((stat, idx) => (
                <div className="experience__stat__card" key={idx}>
                  <div className="stat__glow"></div>
                  <AnimatedStatValue value={stat.value} />
                  <span className="stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Container with Flex Layout */}
          <div className="experience__timeline" ref={timelineRef}>
            {experiences.map((exp, index) => {
              const isWork = exp.category?.toLowerCase() === 'work';
              const rowId = exp.id || `exp-${index}`;
              const isLast = index === experiences.length - 1;

              return (
                <div
                  className={`timeline__row ${exp.current ? 'is__current' : ''}`}
                  key={rowId}
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
                      {/* Header: Real Company Logo + Role + Badges */}
                      <div className="card__header">
                        <div className="company__brand">
                          <div
                            className="company__logo__badge"
                            style={{
                              '--brand-color': exp.logoColor || '#45f3ff',
                            }}
                          >
                            <img
                              src={getImageUrl(exp.companyLogo)}
                              alt={exp.company}
                              className="company__logo__img"
                              loading="lazy"
                            />
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
                              <li key={hIdx}>
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
                              <span key={tIdx} className="tech__tag">
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
            })}
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