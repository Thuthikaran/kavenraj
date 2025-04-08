import React from 'react';

const PrivateMortgage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Private Mortgage</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Private Mortgages: A Smart Solution When Traditional Lenders Say No
        </h2>
        <p className="text-gray-600 mb-4">
          Life doesn't always go as planned. Whether you're dealing with{' '}
          <span className="font-semibold">
            credit challenges, self-employment income, high debt, or unexpected financial hurdles
          </span>
          , getting approved for a mortgage through a traditional bank can feel impossible. But you still have options!
        </p>
        <p className="text-gray-600">
          A <span className="font-semibold">private mortgage</span> can be the{' '}
          <span className="font-semibold">first step</span> toward financial recovery, homeownership, or accessing the
          funds you need.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Why Consider a Private Mortgage?</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-gray-700 mb-2">✔ Competitive Rates from Trusted Private Lenders</h3>
            <p className="text-gray-600">
              I work with established private lenders, including{' '}
              <span className="font-semibold">Mortgage Investment Corporations (MICs)</span> and individual lenders, to
              secure the most competitive rates possible.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-gray-700 mb-2">✔ Tailored Solutions to Fit Your Needs</h3>
            <p className="text-gray-600">
              Whether you need a mortgage to{' '}
              <span className="font-semibold">
                rebuild your credit, consolidate high-interest debt, stop power of sale, or cover urgent expenses
              </span>
              , I'll match you with a lender that aligns with your financial situation.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-gray-700 mb-2">✔ Flexible Approval Process</h3>
            <p className="text-gray-600">
              Unlike banks, private lenders focus on <span className="font-semibold">the value of your property</span>{' '}
              rather than just your credit score or income type.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-gray-700 mb-2">✔ Short-Term & Long-Term Options</h3>
            <p className="text-gray-600">
              Private mortgages are often used as a stepping stone to get you back on track before transitioning to a
              traditional lender. I'll work with you to create a strategy that puts you in the best financial position
              moving forward.
            </p>
          </div>
        </div>

        <p className="mt-6 text-gray-600">
          I have access to <span className="font-semibold">multiple private lenders</span>, from well-established MICs
          with decades of experience helping clients out of tough situations to{' '}
          <span className="font-semibold">private individuals</span>—investors like yourself—who are looking to support
          others while following their own lending criteria.
        </p>
      </section>

      <section className="bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Let's Find the Right Solution for You</h2>
        <p className="text-gray-600 mb-4">
          If you're struggling to secure a mortgage or need financial relief, let's talk. I'll help you explore your
          options, secure the best terms available, and build a plan for the future.
        </p>
        <p className="text-lg font-semibold text-blue-600">
          📞 Contact me today for a confidential consultation. Let's take the next step together!
        </p>
      </section>
    </div>
  );
};

export default PrivateMortgage;
