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
  };

  const ComponentToRender = components[activeComponent] || (() => <div>Component not found</div>);

  const SocialIcon = ({ icon, label }) => (
    <FontAwesomeIcon icon={icon} aria-label={label} className="text-white px-5 text-3xl hover:text-blue-300" />
  );

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen lg:overflow-hidden">
      <div className="flex-1 bg-[navy]">
        <div className="flex flex-col gap-12 p-10">
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
                className={`cursor-pointer text-white p-2 rounded ${
                  activeComponent === name ? 'bg-blue-700' : 'hover:bg-blue-500'
                }`}
                onClick={() => setActiveComponent(name)}
              >
                {name}
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
