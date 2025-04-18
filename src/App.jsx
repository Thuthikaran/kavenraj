import React, { useState, lazy, Suspense } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

// Lazy load components
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));
const Projects = lazy(() => import('./components/Projects'));
const Technologies = lazy(() => import('./components/Technologies'));

// Add more components as needed
const App = () => {
  const [activeComponent, setActiveComponent] = useState('About');

  const components = {
    About: About,
    Experience: Experience,
    Projects: Projects,
    Technologies: Technologies,
    Contact: Contact,
  };

  const ComponentToRender = components[activeComponent] || (() => <div>Component not found</div>);

  const SocialIcon = ({ icon, label }) => (
    <FontAwesomeIcon icon={icon} aria-label={label} className="text-white lg:px-5 pr-5 text-3xl hover:text-[#E1C8A0]" />
  );

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen lg:w-4/5 mx-auto">
      <div className="flex flex-col lg:gap-y-40 bg-[#010A34] lg:w-1/2 mt-10">
        <div>
          <h1 className="text-white text-2xl font-bold my-1">Thuthikaran Easvaran</h1>
          <h2 className="text-white text-xl my-1">Full Stack Engineer</h2>
          {/* <h3 className="text-white text-lg mt-3 font-bold">
            Based in <FontAwesomeIcon icon={faLocationDot} /> Paris, France
          </h3> */}
          <p className="text-base italic mt-3 text-[#E1C8A0]">
            I turn ideas into accessible, pixel-perfect web magic.
          </p>
        </div>

        <div className="hidden lg:block box-2">
          {Object.keys(components).map((name) => (
            <div
              key={name}
              className="cursor-pointer text-white font-bold uppercase text-xs py-1"
              onClick={() => setActiveComponent(name)}
            >
              <div className="group flex items-center cursor-pointer py-2">
                <span
                  className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
                    activeComponent === name
                      ? 'w-20 bg-white'
                      : 'group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200'
                  } motion-reduce:transition-none`}
                ></span>
                {activeComponent === name ? (
                  <span className="text-[white] hover:text-[white]">{name}</span>
                ) : (
                  <span className="text-[#8396BD] hover:text-[white]">{name}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex cursor-pointer box-3">
          <SocialIcon icon={faInstagram} label="Instagram" />
          <SocialIcon icon={faLinkedin} label="LinkedIn" />
          <SocialIcon icon={faSquareFacebook} label="Facebook" />
        </div>
      </div>
      <div className="overflow-y-auto text-white lg:w-1/2 mt-10">
        {Object.values(components).map((Component, index) => (
          <div key={index} className="">
            <Component />
          </div>
        ))}
        <div className="hidden lg:block">
          <Suspense fallback={<div>Loading...</div>}>
            <ComponentToRender />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default App;
