import About from './components/About';
import SelfEmployed from './components/SelfEmployed';
import CreditScoreBelowAverage from './components/CreditScoreBelowAverage';
import FirstTimeHomebuyer from './components/FirstTimeHomebuyer';
import Refinance from './components/Refinance';
import PrivateMortgage from './components/PrivateMortgage';
import InvestingPrivateMortgage from './components/InvestingPrivateMortgage';
import ConfidentialityPrivacy from './components/ConfidentialityPrivacy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('About');

  const components = {
    About: About,
    SelfEmployed: SelfEmployed,
    CreditScoreBelowAverage: CreditScoreBelowAverage,
    FirstTimeHomebuyer: FirstTimeHomebuyer,
    Refinance: Refinance,
    PrivateMortgage: PrivateMortgage,
    InvestingPrivateMortgage: InvestingPrivateMortgage,
    ConfidentialityPrivacy: ConfidentialityPrivacy,
  };

  const ComponentToRender = components[activeComponent];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar */}
      <div className="flex-1 bg-[navy]  ">
        <div className="basic-info px-10 py-10 ">
          <h1 className="text-white text-5xl">Kavenraj Baskaran</h1>
          <h2 className="text-[grey] text-1xl underline">Mortgage Specialist Level 2 - M17001319</h2>
          <h3 className="text-white text-1xl">
            Based in <FontAwesomeIcon icon={faLocationDot} /> Toronto, Canada{' '}
            <FontAwesomeIcon className="text-[red]" icon={faCanadianMapleLeaf} />
          </h3>
          <p className="text-[white] font-bold text-sm">
            I craft personalized,stress-free mortgage solutions that empower individuals and families to achieve their
            homeownership dreams with confidence and clarity.
          </p>

          {/* Navigation Links */}
          <div className="mt-6">
            {Object.keys(components).map((name) => (
              <div
                key={name}
                className={`cursor-pointer text-white p-2 rounded ${
                  activeComponent === name ? 'bg-blue-700' : ''
                }`}
                onClick={() => setActiveComponent(name)}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-2 overflow-y-auto bg-gray-100 p-4">
        <ComponentToRender />
      </div>
    </div>
  );
};
export default App;
