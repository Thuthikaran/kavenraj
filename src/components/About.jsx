import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCanadianMapleLeaf } from '@fortawesome/free-brands-svg-icons';
const About = () => {
  return (
    <div className="p-6">
      <div className="lg:flex gap-1">
        <div className="flex-2 border p-5">
          <h2 className="text-3xl font-bold">Tailored Mortgage Solutions Simplified</h2>
          <p className="text-xl mt-2">#Top Mortgage Specialist in Toronto & Canada*</p>
          <p className="text-lg mt-4">Expert guidance for first-time buyers, refinancing, and private mortgages.</p>
        </div>
        <div className="flex-1 border p-5">
          <p>an image will soon show up</p>
          <img src="" alt="" />
        </div>
      </div>
      <div className='border p-5 mt-5'>
        <h1 className="text-xl font-semibold">Hi, I’m Kavenraj</h1>
        <p className="text-lg">
          Mortgage Broker <FontAwesomeIcon icon={faLocationDot} /> Ottawa Canada{' '}
          <FontAwesomeIcon className="text-[red]" icon={faCanadianMapleLeaf} />
        </p>
        <p className="mt-4">
          Since 2015, I have been helping individuals and families achieve their homeownership dreams by providing
          personalized mortgage solutions. With a background in business and experience running multiple companies, I
          understand the financial challenges many face—especially those who are self-employed or navigating
          non-traditional income sources. I know firsthand how overwhelming it can feel to save for a first home or take
          the leap into real estate investment. That’s why I focus on making the mortgage process clear, stress-free,
          and tailored to your unique situation. Whether you’re buying your first home, looking for better mortgage
          options, or need a flexible solution beyond standard programs, I’m here to guide you every step of the way.
        </p>
      </div>
    </div>
  );
};

export default About;
