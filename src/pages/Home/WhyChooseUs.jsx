// import React from "react";

// const benefits = [
//   {
//     title: "Transparent Funding",
//     description:
//       "We ensure that every contribution reaches the intended campaign securely and transparently.",
//   },
//   {
//     title: "Global Reach",
//     description:
//       "Our platform connects creators and contributors from all around the world.",
//   },
//   {
//     title: "Supportive Community",
//     description:
//       "Join a community that believes in empowering ideas and supporting causes that matter.",
//   },
//   {
//     title: "Secure Transactions",
//     description:
//       "With robust payment systems, your transactions are always safe and secure.",
//   },
// ];

// const WhyChooseUs = () => {
//   return (
//     <div className="py-10 bg-gray-100 text-center">
//       <h2 className="text-4xl font-bold mb-6 text-gray-800">
//         Why Choose Crowdcube?
//       </h2>
//       <p className="text-lg text-gray-600 mb-8">
//         Discover why Crowdcube is the best choice for funding your dreams and
//         supporting causes.
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 mx-auto">
//         {benefits.map((benefit, index) => (
//           <div
//             key={index}
//             className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
//           >
//             <h3 className="text-xl font-bold text-gray-800">{benefit.title}</h3>
//             <p className="text-gray-600 mt-2">{benefit.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;


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
