import React from 'react';

const ConfidentialityPrivacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#266EB7] mb-3">Confidentiality and Privacy</h1>
        <p className="text-xl italic text-gray-600 mb-4">Your Privacy & Confidentiality Matter to Me</p>
      </div>

      {/* Introduction */}
      <div className="text-center mb-8 max-w-2xl mx-auto">
        <p className="text-gray-600 mb-6">
          As your mortgage agent, my top priority is finding you the best solutions while protecting your personal and
          financial information.
        </p>
      </div>

      {/* Key Benefits */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto my-10">
        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#000080]">
          <h3 className="font-bold text-lg text-gray-800 mb-2">Your Information Stays Protected</h3>
          <p className="text-gray-600">I only share your details with lenders after obtaining your explicit consent.</p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#000080]">
          <h3 className="font-bold text-lg text-gray-800 mb-2">Limited Access</h3>
          <p className="text-gray-600">
            Your information is only shared with lenders that align with your financial goals.
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow-sm border-t-4 border-[#000080]">
          <h3 className="font-bold text-lg text-gray-800 mb-2">Secure Handling</h3>
          <p className="text-gray-600">I follow all regulations and best practices to keep your data safe.</p>
        </div>
      </div>

      {/* Enhanced Closing Section */}
      <div className="text-center mt-15">
        <p className="text-gray-600 italic text-lg">
          "Your trust is as important to me as finding you the best mortgage solution."
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Contact me if you have any questions about how your information is handled.
        </p>
      </div>
    </div>
  );
};

export default ConfidentialityPrivacy;
