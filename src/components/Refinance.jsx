import React from 'react';

const Refinancing = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#266EB7] mb-3">Refinancing</h1>
        <p className="text-xl italic text-gray-600 mb-4">
          Refinancing isn't just about lowering payments – it's about creating opportunities
        </p>
      </div>

      {/* Introduction */}
      <div className="text-center mb-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Here's how I can help:</h2>
        <p className="text-gray-600 mb-6">
          Whether you're looking to consolidate debt, achieve important goals, or support loved ones, I'll help you
          unlock the potential in your home's equity with tailored refinancing solutions.
        </p>

        <div className="mb-6">
          <p className="font-bold text-[#000080]">Explore Refinance Options – Same-Day Submissions Available!</p>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto my-10">
        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#000080]">
          <h3 className="font-bold text-lg text-gray-800 mb-2 text-center">Debt Consolidation</h3>
          <p className="text-gray-600 text-center">
            Simplify finances by combining high-interest debts into one manageable payment.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#000080]">
          <h3 className="font-bold text-lg text-gray-800 mb-2 text-center">Achieve Goals</h3>
          <p className="text-gray-600 text-center">Fund major purchases, start a business, or invest in your future.</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#000080]">
          <h3 className="font-bold text-lg text-gray-800 mb-2 text-center">Support Loved Ones</h3>
          <p className="text-gray-600 text-center">Use your home's equity to help family members achieve their dreams.</p>
        </div>
      </div>

      {/* Enhanced Closing Section */}
      <div className="text-center mt-15">
        <p className="text-gray-600 italic text-lg">
          "Your home's equity is more than just a number – let's make it work for you."
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Contact me today to explore refinancing options tailored to your needs.
        </p>
      </div>
    </div>
  );
};

export default Refinancing;
