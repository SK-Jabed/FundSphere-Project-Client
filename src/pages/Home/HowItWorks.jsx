import React from "react";

const steps = [
  {
    step: "1. Start a Campaign",
    description: "Share your cause or project and set a fundraising goal.",
    icon: "📤",
  },
  {
    step: "2. Spread the Word",
    description: "Promote your campaign on social media to reach supporters.",
    icon: "📢",
  },
  {
    step: "3. Receive Contributions",
    description: "Collect funds securely from donors around the world.",
    icon: "💰",
  },
];

const HowItWorks = () => {
  return (
    <div className="py-10 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-11/12 mx-auto">
        {steps.map((item, index) => (
          <div
            key={index}
            className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-center"
          >
            <div className="text-6xl">{item.icon}</div>
            <h3 className="text-xl font-bold mt-4">{item.step}</h3>
            <p className="mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
