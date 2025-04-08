import React from 'react';

const FirstTimeHomebuyers = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#266EB7] mb-3">First-Time Homebuyers</h1>
        <p className="text-xl italic text-gray-600 mb-4">
          First-Time Homebuyer? Let's Make Your Dream of Homeownership a Reality!
        </p>
      </div>

      {/* Introduction */}
      <div className="text-center mb-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          I'm Kavenraj Baskaran, and I understand that buying your first home can feel overwhelming.
        </h2>
        <p className="text-gray-600 mb-6">
          That's why I'm here to guide you every step of the way. From low down payment options to personalized advice,
          I'll work with you to find a mortgage solution that fits your budget and goals. Let's turn your dream of
          homeownership into a reality – together.
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
          <h3 className="font-bold text-lg text-gray-800 mb-2 text-center">Personalized Service</h3>
          <p className="text-gray-600 text-center">
            As a solo mortgage professional, I provide one-on-one attention to ensure your needs are met.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#000080]">
          <h3 className="font-bold text-lg text-gray-800 mb-2 text-center">Low Down Payment Options</h3>
          <p className="text-gray-600 text-center">Explore programs designed to make homeownership more affordable.</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#000080]">
          <h3 className="font-bold text-lg text-gray-800 mb-2 text-center">Fast Results</h3>
          <p className="text-gray-600 text-center">
            Once I have all the necessary documents, I'll submit your application the same day – no delays.
          </p>
        </div>
      </div>

      {/* Enhanced Closing Section */}
      <div className="text-center mt-15">
        <p className="text-gray-600 italic text-lg">
          "Your dream home is within reach – let's make it happen together."
        </p>
        <p className="text-gray-500 text-sm mt-2">Contact me today to explore first-time homebuyer programs.</p>
      </div>
    </div>
  );
};

export default FirstTimeHomebuyers;
