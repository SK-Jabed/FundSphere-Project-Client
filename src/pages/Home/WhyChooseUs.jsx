import React from "react";
import { Slide } from "react-awesome-reveal";

const benefits = [
  {
    title: "Global Reach",
    description: "Connect with supporters worldwide to fund your vision.",
    icon: "🌍",
  },
  {
    title: "Secure Payments",
    description: "We ensure safe and fast transactions.",
    icon: "💳",
  },
  {
    title: "Community Support",
    description: "Access a network of like-minded individuals.",
    icon: "🤝",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="py-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">Why Choose Us?</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-11/12 mx-auto">
        {benefits.map((benefit, index) => (
          <Slide key={index} direction="up" duration={800}>
            <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-center">
              <div className="text-6xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold">{benefit.title}</h3>
              <p className="text-gray-700 mt-2">{benefit.description}</p>
            </div>
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
