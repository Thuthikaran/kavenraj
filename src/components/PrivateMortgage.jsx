import React from 'react';

const PrivateMortgage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#266EB7] mb-3">Private Mortgage</h1>
        <p className="text-xl italic text-gray-600 mb-4">A Smart Solution When Traditional Lenders Say No</p>
      </div>

      {/* Introduction */}
      <div className="text-center mb-8 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Life doesn't always go as planned</h2>
        <p className="text-gray-600 mb-6">
          Whether you're dealing with credit challenges, self-employment income, high debt, or unexpected financial
          hurdles, a private mortgage can be the first step toward financial recovery, homeownership, or accessing the
          funds you need.
        </p>

        <div className="mb-6">
          <p className="font-bold text-[#000080]">Contact me today for a confidential consultation</p>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto my-10">
        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#000080]">
          <h3 className="font-bold text-lg text-gray-800 mb-2 text-center">Competitive Rates</h3>
          <p className="text-gray-600 text-center">Work with trusted private lenders for the most competitive rates possible.</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#000080]">
          <h3 className="font-bold text-lg text-gray-800 mb-2 text-center">Flexible Approval</h3>
          <p className="text-gray-600 text-center">Focus on property value rather than just credit score or income type.</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#000080]">
          <h3 className="font-bold text-lg text-gray-800 mb-2 text-center">Tailored Solutions</h3>
          <p className="text-gray-600 text-center">
            Whether you need to rebuild credit or consolidate debt, I'll match you with the right lender.
          </p>
        </div>
      </div>

      {/* Enhanced Closing Section */}
      <div className="text-center mt-15">
        <p className="text-gray-600 italic text-lg">
          "When traditional doors close, private mortgages open new possibilities."
        </p>
        <p className="text-gray-500 text-sm mt-2">Let's take the next step together toward your financial solution.</p>
      </div>
    </div>
  );
};

export default PrivateMortgage;
