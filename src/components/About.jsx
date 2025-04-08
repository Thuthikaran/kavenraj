import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const About = () => {
  return (
    <div className="mx-5">
      <div className="lg:flex gap-1 mt-2">
        <div className="flex-2 p-5 text-center m-auto">
          <h2 className="lg:text-5xl font-bold text-[#266EB7] font-bold">Tailored Mortgage Solutions Simplified</h2>
          <p className="text-2xl mt-2 font-extrabold text-black">#Top Mortgage Specialist in Toronto & Canada*</p>
          <p className="text-sm mt-2 font-semibold text-black">
            Expert guidance for first-time buyers, refinancing, and private mortgages.
          </p>
          <p className="text-sm my-5 font-extralight text-black">
            I’m Kavenraj Baskaran, and I understand that life happens. Your credit score doesn’t define your potential,
            and it certainly doesn’t define how hard I’ll work for you. Whether you’re looking to buy a new home,
            refinance to consolidate debt, or achieving an important goal, I’m here to help. With flexible solutions and
            a commitment to your success, I’ll personally guide you every step of the way.
          </p>
          <p className="font-bold text-[#000080]">
            Get Started Today – Quick Pre-Qualification and Same-Day Submissions!
          </p>
        </div>
        <div className="flex-1 bg-[#266EB7] rounded-3xl">
          <img
            src="https://res.cloudinary.com/drxas1wpe/image/upload/v1742643794/Photoroom_20250314_220405_lq7u1u.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="p-5">
        <p className="text-md mt-4 font-extrathin font-sm">
          Since 2015, I have been helping individuals and families achieve their homeownership dreams by providing
          personalized mortgage solutions. With a background in business and experience running multiple companies, I
          understand the financial challenges many face—especially those who are self-employed or navigating
          non-traditional income sources. I know firsthand how overwhelming it can feel to save for a first home or take
          the leap into real estate investment. That’s why I focus on making the mortgage process clear, stress-free,
          and tailored to your unique situation. Whether you’re buying your first home, looking for better mortgage
          options, or need a flexible solution beyond standard programs, I’m here to guide you every step of the way.
        </p>
        <p className="mt-4">
          Below, you’ll find detailed segments addressing specific needs, including solutions for self-employed
          individuals, those with below-average credit scores, first-time homebuyers, refinancing options, private
          mortgages, and even opportunities for investing in private mortgages. Each segment is designed to provide
          clarity, support, and actionable steps to help you achieve your financial goals.
        </p>
      </div>
    </div>
  );
};

export default About;
