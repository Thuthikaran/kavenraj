import React, { useState, lazy, Suspense } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCanadianMapleLeaf, faInstagram, faLinkedin, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

// Lazy load components
const About = lazy(() => import('./components/About'));
const SelfEmployed = lazy(() => import('./components/SelfEmployed'));
const CreditScoreBelowAverage = lazy(() => import('./components/CreditScoreBelowAverage'));
const FirstTimeHomebuyer = lazy(() => import('./components/FirstTimeHomebuyer'));
const Refinance = lazy(() => import('./components/Refinance'));
const PrivateMortgage = lazy(() => import('./components/PrivateMortgage'));
const InvestingPrivateMortgage = lazy(() => import('./components/InvestingPrivateMortgage'));
const ConfidentialityPrivacy = lazy(() => import('./components/ConfidentialityPrivacy'));
const Contact = lazy(()=> import('./components/Contact'))

const App = () => {
  const [activeComponent, setActiveComponent] = useState('About');

  const components = {
    'About':About,
    'Self Employed': SelfEmployed,
    'Credit-Score Below Average': CreditScoreBelowAverage,
    'First-Time homebuyer': FirstTimeHomebuyer,
    'Refinance': Refinance,
    'Private Mortgage': PrivateMortgage,
    'Investing in Private Mortgage': InvestingPrivateMortgage,
    'Confidentiality & Privacy': ConfidentialityPrivacy,
    'Contact': Contact
  };

  const ComponentToRender = components[activeComponent] || (() => <div>Component not found</div>);

  const SocialIcon = ({ icon, label }) => (
    <FontAwesomeIcon icon={icon} aria-label={label} className="text-white lg:px-5 pr-5 text-3xl hover:text-blue-300" />
  );

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen lg:overflow-hidden">
      <div className="flex-1 bg-[navy]">
        <div className="flex flex-col p-10 gap-5 md:gap-5 lg:gap-15">
          <header>
            <h1 className="text-white text-4xl font-bold">Kavenraj Baskaran</h1>
            <h2 className="text-[grey]  underline font-thin">Mortgage Specialist Level 2 - M17001319</h2>
            <h3 className="text-white text-1xl font-bold">
              Based in <FontAwesomeIcon icon={faLocationDot} /> Toronto, Canada{' '}
              <FontAwesomeIcon className="text-[red]" icon={faCanadianMapleLeaf} />
            </h3>
            <p className="text-[white] italic text-sm">
              I craft personalized, stress-free mortgage solutions that empower individuals and families to achieve
              their homeownership dreams with confidence and clarity.
            </p>
          </header>
          <nav className="hidden lg:block">
            {Object.keys(components).map((name) => (
              <div
                key={name}
                className={`cursor-pointer text-white font-bold uppercase text-xs p-2 rounded `}
                onClick={() => setActiveComponent(name)}
              >
                <div className="group flex items-center cursor-pointer">
                  <span
                    className={`nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
                      activeComponent === name
                        ? 'w-20 bg-white' // Active state styles
                        : 'group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200'
                    } motion-reduce:transition-none`}
                  ></span>
                  <span>{name}</span>
                </div>
              </div>
            ))}
          </nav>
          <div className="cursor-pointer">
            <SocialIcon icon={faInstagram} label="Instagram" />
            <SocialIcon icon={faLinkedin} label="LinkedIn" />
            <SocialIcon icon={faSquareFacebook} label="Facebook" />
          </div>
        </div>
      </div>
      <div className="flex-2 overflow-y-auto bg-gray-100 p-4">
        {Object.values(components).map((Component, index) => (
          <div key={index} className="lg:hidden">
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
