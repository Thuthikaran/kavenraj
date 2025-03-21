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
    About,
    'Self Employed': SelfEmployed,
    'Credit-Score Below Average': CreditScoreBelowAverage,
    'First-Time homebuyer': FirstTimeHomebuyer,
    Refinance,
    'Private Mortgage': PrivateMortgage,
    'Investing in Private Mortgage': InvestingPrivateMortgage,
    'Confidentiality & Privacy': ConfidentialityPrivacy,
  };

  const ComponentToRender = components[activeComponent] || (() => <div>Component not found</div>);

  const SocialIcon = ({ icon, label }) => (
    <FontAwesomeIcon icon={icon} aria-label={label} className="text-white px-5 text-5xl hover:text-blue-300" />
  );

  return (
    <div className="flex flex-col  lg:flex-row h-screen overflow-hidden">
      <div className="sidebar flex-1 bg-[navy]">
        {/* sm:bg-green-500 md:bg-blue-500 lg:bg-yellow-500 xl:bg-purple-500 */}
        <div className="flex flex-col gap-10 p-10">
          <header>
            <h1 className="text-white text-5xl">Kavenraj Baskaran</h1>
            <h2 className="text-[grey] text-1xl underline">Mortgage Specialist Level 2 - M17001319</h2>
            <h3 className="text-white text-1xl">
              Based in <FontAwesomeIcon icon={faLocationDot} /> Toronto, Canada{' '}
              <FontAwesomeIcon className="text-[red]" icon={faCanadianMapleLeaf} />
            </h3>
            <p className="text-[white] font-bold text-sm">
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
          <div className="text-center hidden lg:block">
            <SocialIcon icon={faInstagram} label="Instagram" />
            <SocialIcon icon={faLinkedin} label="LinkedIn" />
            <SocialIcon icon={faSquareFacebook} label="Facebook" />
          </div>
        </div>
      </div>
      <div className="flex-2 overflow-y-auto bg-gray-100 p-4">
        <ComponentToRender />
      </div>
    </div>
  );
};

export default App;
