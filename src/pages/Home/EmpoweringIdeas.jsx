// import React from "react";

// const ideas = [
//   {
//     title: "Support Creativity",
//     description:
//       "We believe in the power of creativity to transform lives and communities.",
//   },
//   {
//     title: "Drive Change",
//     description:
//       "Every campaign contributes to creating a positive and lasting impact.",
//   },
//   {
//     title: "Foster Innovation",
//     description:
//       "Our platform is a space where new ideas are nurtured and innovation thrives.",
//   },
//   {
//     title: "Build Connections",
//     description:
//       "We connect people who share the same vision and passion for making a difference.",
//   },
// ];

// const EmpoweringIdeas = () => {
//   return (
//     <div className="py-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center">
//       <h2 className="text-4xl font-bold mb-6">
//         Empowering Ideas, One Campaign at a Time
//       </h2>
//       <p className="text-lg mb-8">
//         Crowdcube is dedicated to transforming ideas into reality by connecting
//         people with a shared purpose.
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 mx-auto">
//         {ideas.map((idea, index) => (
//           <div
//             key={index}
//             className="p-6 bg-white text-black rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
//           >
//             <h3 className="text-xl font-bold">{idea.title}</h3>
//             <p className="mt-2">{idea.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EmpoweringIdeas;

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

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
    <div className="py-10 bg-gray-100 dark:bg-black">
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
