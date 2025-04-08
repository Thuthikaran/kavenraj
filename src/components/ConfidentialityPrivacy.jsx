import React from 'react';

const ConfidentialityAndPrivacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Confidentiality and Privacy</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Privacy & Confidentiality Matter to Me</h2>
        <p className="text-gray-600 mb-4">
          As your mortgage agent, my top priority is not only to find you the best mortgage solutions but also to
          protect your personal and financial information at every step of the process.
        </p>
        <p className="text-gray-600">
          I understand that applying for a mortgage involves sharing sensitive details, and I take that responsibility
          very seriously. That's why I follow strict confidentiality practices to ensure your information is always
          secure.
        </p>
      </section>

      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-8">
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
              <span className="text-blue-600 font-bold">✅</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-700 mb-1">Your Information Stays Protected</h3>
              <p className="text-gray-600">
                I will only share your details with a lender after obtaining your explicit consent.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
              <span className="text-blue-600 font-bold">✅</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-700 mb-1">Limited Access</h3>
              <p className="text-gray-600">
                Your information will only be shared with lenders who align with both their approval criteria and your
                financial goals.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
              <span className="text-blue-600 font-bold">✅</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-700 mb-1">Secure Handling</h3>
              <p className="text-gray-600">
                I follow all regulations and best practices to keep your data safe, in compliance with Ontario's privacy
                laws and industry standards.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white p-6 rounded-lg border border-gray-200">
        <p className="text-gray-600">
          You can feel confident knowing that your trust and privacy are as important to me as securing the best
          mortgage solution for you. If you have any questions about how your information is handled, I'm always here to
          provide clarity and assurance.
        </p>
      </section>
    </div>
  );
};

export default ConfidentialityAndPrivacy;
