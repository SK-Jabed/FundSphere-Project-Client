import React from "react";

const ideas = [
  {
    title: "Support Creativity",
    description:
      "We believe in the power of creativity to transform lives and communities.",
  },
  {
    title: "Drive Change",
    description:
      "Every campaign contributes to creating a positive and lasting impact.",
  },
  {
    title: "Foster Innovation",
    description:
      "Our platform is a space where new ideas are nurtured and innovation thrives.",
  },
  {
    title: "Build Connections",
    description:
      "We connect people who share the same vision and passion for making a difference.",
  },
];

const EmpoweringIdeas = () => {
  return (
    <div className="py-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
      <h2 className="text-4xl font-bold mb-6">
        Empowering Ideas, One Campaign at a Time
      </h2>
      <p className="text-lg mb-8">
        Crowdcube is dedicated to transforming ideas into reality by connecting
        people with a shared purpose.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 mx-auto">
        {ideas.map((idea, index) => (
          <div
            key={index}
            className="p-6 bg-white text-black rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <h3 className="text-xl font-bold">{idea.title}</h3>
            <p className="mt-2">{idea.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmpoweringIdeas;