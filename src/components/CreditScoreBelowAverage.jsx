import React from 'react';

const BelowAverageCredit = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#266EB7] mb-3">Credit-Score Below Average?</h1>
        <p className="text-xl italic text-gray-600 mb-4">
          Your Credit Score Is Just a Number – Let's Find the Right Mortgage or Refinancing Solution for You!
        </p>
      </div>

      {/* Introduction */}
      <div className="text-center mb-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          I'm Kavenraj Baskaran, and I understand that life happens.
        </h2>
        <p className="text-gray-600 mb-6">
          Your credit score doesn't define your potential, and it certainly doesn't define how hard I'll work for you.
          Whether you're looking to buy a new home, refinance to consolidate debt, or achieving an important goal, I'm
          here to help. With flexible solutions and a commitment to your success, I'll personally guide you every step
          of the way.
        </p>

        <div className="mb-6">
          <p className="font-bold text-[#000080]">
            Get Started Today – Quick Pre-Qualification and Same-Day Submissions!
          </p>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto my-10">
        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#000080]">
          <h3 className="font-bold text-lg text-[#000080] mb-2 text-center">Personalized Service</h3>
          <p className="text-gray-600 text-center">
            As a solo mortgage professional, I provide one-on-one attention to ensure your needs are met.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#000080]">
          <h3 className="font-bold text-lg text-[#000080] mb-2 text-center">Fast Results</h3>
          <p className="text-gray-600 text-center">
            Once I have all the necessary documents, I'll submit your application the same day – no delays, no excuses.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#000080]">
          <h3 className="font-bold text-lg text-[#000080] mb-2 text-center">Flexible Solutions</h3>
          <p className="text-gray-600 text-center">
            I specialize in creating mortgage and refinancing options tailored to your unique financial situation.
          </p>
        </div>
      </div>

      {/* Enhanced Closing Section */}
      <div className="text-center mt-15">
        <p className="text-gray-600 italic text-lg">
          "Your credit score is just a starting point – let me help you write the next chapter of your financial story."
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Contact me today for a no-obligation consultation about your mortgage options.
        </p>
      </div>
    </div>
  );
};

export default BelowAverageCredit;
