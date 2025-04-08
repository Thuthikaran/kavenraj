import React from 'react';

const SelfEmployedIndividuals = () => {
  return (
    <div className="max-w-4xl mx-auto my-5 px-4 py-6">
      {/* Header - unchanged */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#266EB7] mb-3">Self-Employed ?</h1>
        <p className="text-xl italic text-gray-600 mb-4">
          Self-Employed? I Speak Your Language – Let's Make Homeownership or Refinancing a Reality!
        </p>
      </div>

      {/* Introduction - unchanged */}
      <div className="text-center mb-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Alternative Solutions for Non-Traditional Income Verification
        </h2>
        <p className="text-gray-600 mb-6">
          Traditional lenders don't always get it, but I do. Whether you're looking to buy a home, refinance to
          consolidate debt, or unlock your home's equity, I'll create a mortgage solution that fits your unique income
          situation.
        </p>

        <div className="mb-6">
          <p className="font-bold text-[#000080]">
            Get Started Today – Quick Pre-Qualification and Same-Day Submissions!
          </p>
        </div>
      </div>

      {/* Key Benefits - unchanged */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#000080]">
          <h3 className="font-bold text-lg mb-2 text-center text-[#000080]">Personalized Service</h3>
          <p className="text-gray-600 text-center">
            One-on-one attention to ensure your needs are met as a self-employed professional.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#000080]">
          <h3 className="font-bold text-lg mb-2 text-center text-[#000080]">Flexible Verification</h3>
          <p className="text-gray-600 text-center">
            Bank statements and invoices accepted instead of traditional pay stubs.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#000080]">
          <h3 className="font-bold text-lg mb-2 text-center text-[#000080]">Fast Results</h3>
          <p className="text-gray-600 text-center">Same-day application submission once documents are received.</p>
        </div>
      </div>

      {/* Enhanced Closing Section */}
      <div className="text-center mt-15 mb-4 space-y-2">
        <p className="text-gray-600 italic text-lg">
          "Your entrepreneurial spirit built your business - let me help it build your dream home too."
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Contact me today for a no-obligation consultation about your self-employed mortgage options.
        </p>
      </div>
    </div>
  );
};

export default SelfEmployedIndividuals;
