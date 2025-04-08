import React from 'react';

const PrivateMortgageInvesting = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#266EB7] mb-3">Investing in Private Mortgage</h1>
        <p className="text-xl italic text-gray-600 mb-4">Earn Secure & High Returns as a Private Mortgage Lender</p>
      </div>

      {/* Introduction */}
      <div className="text-center mb-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Looking for a secure, asset-backed investment with steady returns?
        </h2>
        <p className="text-gray-600 mb-6">
          Private mortgage lending offers high-yield, collateralized opportunities where you can invest in real
          estate-backed loans while helping borrowers who may not qualify through traditional lenders.
        </p>

        <div className="mb-6">
          <p className="font-bold text-[#000080]">Let's discuss how you can get started as a private lender today.</p>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto my-10">
        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#000080]">
          <h3 className="font-bold text-lg text-gray-800 mb-2 text-center">High-Yield Returns</h3>
          <p className="text-gray-600 text-center">Earn competitive interest rates backed by real estate security.</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#000080]">
          <h3 className="font-bold text-lg text-gray-800 mb-2 text-center">Custom Lending</h3>
          <p className="text-gray-600 text-center">Set your own criteria for property types and loan terms.</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#000080]">
          <h3 className="font-bold text-lg text-gray-800 mb-2 text-center">Hands-Free Investing</h3>
          <p className="text-gray-600 text-center">I handle screening, documentation, and follow-ups for you.</p>
        </div>
      </div>

      {/* Enhanced Closing Section */}
      <div className="text-center mt-15">
        <p className="text-gray-600 italic text-lg">
          "Your capital secured by real estate - let's build wealth together."
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Contact me today for a confidential consultation about private lending opportunities.
        </p>
      </div>
    </div>
  );
};

export default PrivateMortgageInvesting;
