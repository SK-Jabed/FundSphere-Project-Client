import React from "react";

const benefits = [
  {
    title: "Transparent Funding",
    description:
      "We ensure that every contribution reaches the intended campaign securely and transparently.",
  },
  {
    title: "Global Reach",
    description:
      "Our platform connects creators and contributors from all around the world.",
  },
  {
    title: "Supportive Community",
    description:
      "Join a community that believes in empowering ideas and supporting causes that matter.",
  },
  {
    title: "Secure Transactions",
    description:
      "With robust payment systems, your transactions are always safe and secure.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-10 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">
        Why Choose Crowdcube?
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Discover why Crowdcube is the best choice for funding your dreams and
        supporting causes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 mx-auto">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-bold text-gray-800">{benefit.title}</h3>
            <p className="text-gray-600 mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
