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
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const App = () => {
  const [activeComponent, setActiveComponent] = useState("About");

  const components = {
    "About": About,
    "Self Employed": SelfEmployed,
    "Credit-Score Below Average": CreditScoreBelowAverage,
    "First-Time homebuyer": FirstTimeHomebuyer,
    "Refinance": Refinance,
    "Private Mortgage": PrivateMortgage,
    "Investing in Private Mortgage": InvestingPrivateMortgage,
    "Confidentiality & Privacy": ConfidentialityPrivacy,
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
          <div className="my-10">
            {Object.keys(components).map((name) => (
              <div
                key={name}
                className={`cursor-pointer text-white p-2 rounded ${activeComponent === name ? 'bg-blue-700' : ''}`}
                onClick={() => setActiveComponent(name)}
              >
                {name}
              </div>
            ))}
          </div>
          <div className="flex justify-center ">
            <FontAwesomeIcon icon={faInstagram} className="text-white px-5 text-5xl" />
            <FontAwesomeIcon icon={faLinkedin} className="text-white px-5 text-5xl" />
            <FontAwesomeIcon icon={faSquareFacebook} className="text-white px-5 text-5xl" />
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
