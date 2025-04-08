import React from 'react';

const FirstTimeHomebuyers = () => {
  return (
    <section className="p-6 md:p-10 bg-white rounded-2xl shadow-sm space-y-6">
      <h2 className="text-2xl font-bold">First-Time Homebuyers</h2>
      <p className="italic text-gray-700">First-Time Homebuyer? Let’s Make Your Dream of Homeownership a Reality!</p>
      <p>
        I’m Kavenraj Baskaran, and I understand that buying your first home can feel overwhelming. That’s why I’m here
        to guide you every step of the way. From low down payment options to personalized advice, I’ll work with you to
        find a mortgage solution that fits your budget and goals. Let’s turn your dream of homeownership into a reality
        – together.
      </p>
      <div className="space-y-2">
        <h3 className="font-semibold">Let's Work Together:</h3>
        <p className="italic">Get Started Today – Quick Pre-Qualification and Same-Day Submissions!</p>
      </div>
      <div>
        <h3 className="font-semibold">Key Features to Highlight:</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Personalized Service</strong>: As a solo mortgage professional, I provide one-on-one attention to
            ensure your needs are met.
          </li>
          <li>
            <strong>Low Down Payment Options</strong>: Explore programs designed to make homeownership more affordable.
          </li>
          <li>
            <strong>Fast Results</strong>: Once I have all the necessary documents, I’ll submit your application the{' '}
            <strong>same day</strong> – no delays, no excuses.
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold">How It Works</h3>
        <p className="italic">My process is simple, transparent, and designed to get you results fast:</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Apply Online: Complete my easy pre-qualification form in minutes.</li>
          <li>Submit Documents: Provide the necessary paperwork (I’ll guide you on what’s needed).</li>
          <li>
            Same-Day Submission: Once I have everything, I’ll submit your application the <strong>same day</strong>.
          </li>
          <li>Get Approved: Receive a decision quickly and move closer to your dream home.</li>
        </ol>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Why Choose Me?</h3>
        <p className="italic">
          I’m not just a mortgage professional – I’m your partner in achieving homeownership. Here’s what sets me apart:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>No Judgment</strong>: I focus on your potential, not your past.
          </li>
          <li>
            <strong>Quick Turnaround</strong>: I prioritize speed and efficiency to get you results fast.
          </li>
          <li>
            <strong>Transparent Process</strong>: No hidden fees, no surprises – just clear, honest communication.
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold">First-Time Homebuyer Programs</h3>
        <p>Buying your first home shouldn’t feel out of reach. Here’s how I can help:</p>
        <ul className="list-disc list-inside">
          <li>Low Down Payment Options</li>
          {/* Add more program highlights here if needed */}
        </ul>
      </div>
    </section>
  );
};

export default FirstTimeHomebuyers;
