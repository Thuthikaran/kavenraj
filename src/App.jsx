import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Technologies from './components/Technologies';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  const SocialIcon = ({ icon, label }) => (
    <FontAwesomeIcon
      icon={icon}
      aria-label={label}
      className="text-white lg:px-5 pr-5 text-3xl hover:text-[#E1C8A0] transition-colors"
    />
  );

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen lg:w-4/5 mx-auto">
      {/* Left Sidebar */}
      <div className="flex flex-col lg:gap-y-40 bg-[#010A34] lg:w-1/2 mt-10">
        <div>
          <h1 className="text-white text-4xl font-bold my-1">Thuthikaran Easvaran</h1>
          <h2 className="text-white text-xl my-1">Développeur Full Stack</h2>
          <p className="text-base font-thin italic mt-1 text-[#E1C8A0]">
            J'invente un web fluide, léger comme une idée.
          </p>
          <p className="mt-1">
            <FontAwesomeIcon icon={faLocationDot} className="text-[#E1C8A0]" />
            <span className="text-white"> Paris, France 🇫🇷</span>
          </p>
        </div>

        {/* Navigation */}
        <div className="hidden lg:block box-2 space-y-6">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="group flex items-center cursor-pointer">
              <span
                className={`mr-4 h-px transition-all ${
                  activeSection === link.id
                    ? 'w-20 bg-slate-200' // Active state (matches hover)
                    : 'w-8 bg-slate-600 group-hover:w-20 group-hover:bg-slate-200' // Default + hover
                }`}
              ></span>
              <span
                className={`font-bold uppercase text-xs transition-colors ${
                  activeSection === link.id ? 'text-[#E1C8A0]' : 'text-[#8396BD] hover:text-[#E1C8A0]'
                }`}
              >
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex cursor-pointer box-3">
          <SocialIcon icon={faInstagram} label="Instagram" />
          <SocialIcon icon={faLinkedin} label="LinkedIn" />
          <SocialIcon icon={faSquareFacebook} label="Facebook" />
        </div>
      </div>

      {/* Main Content */}
      <div className="overflow-y-auto text-white lg:w-1/2 mt-10">
        <section id="about">
          <About />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="technologies">
          <Technologies />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
