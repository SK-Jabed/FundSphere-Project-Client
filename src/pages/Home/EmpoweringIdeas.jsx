import React from "react";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const ideas = [
  {
    title: "Innovative Startups",
    description: "Support unique and groundbreaking business ideas.",
    image: "https://i.ibb.co.com/crcK9XB/rc-6.webp",
  },
  {
    title: "Community Projects",
    description: "Empowering communities through targeted initiatives.",
    image: "https://i.ibb.co.com/2hW3Pbq/rc-5.jpg",
  },
  {
    title: "Creative Arts",
    description: "Fostering artistic talent and cultural projects.",
    image: "https://i.ibb.co.com/qxGp5Jy/rc-3.jpg",
  },
];

const EmpoweringIdeas = () => {
  return (
    <div className="py-10 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center dark:text-white mb-4">
        <Typewriter
          words={[
            "Empowering Ideas That Change Lives!",
            "Support. Innovate. Transform.",
          ]}
          loop
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
        {ideas.map((idea, index) => (
          <Fade key={index} direction="up" duration={800}>
            <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
              <img
                src={idea.image}
                alt={idea.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-bold mt-4">{idea.title}</h3>
              <p className="text-gray-700 mt-2">{idea.description}</p>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default EmpoweringIdeas;
