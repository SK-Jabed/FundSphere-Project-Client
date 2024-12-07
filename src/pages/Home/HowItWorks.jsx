// import React from "react";

// const HowItWorks = () => {
//   const steps = [
//     {
//       title: "Create a Campaign",
//       description:
//         "Share your story, set a goal, and publish your campaign to start raising funds.",
//       icon: "📝",
//     },
//     {
//       title: "Share Your Campaign",
//       description:
//         "Use social media, email, and other platforms to reach potential supporters.",
//       icon: "📤",
//     },
//     {
//       title: "Receive Donations",
//       description:
//         "Watch your campaign grow as supporters contribute to your cause.",
//       icon: "💰",
//     },
//     {
//       title: "Spread the Word",
//       description: "Promote your campaign on social media to reach supporters.",
//       icon: "📢",
//     },
//   ];

//   return (
//     <div className="py-10 bg-white">
//       <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
//       <div className="flex flex-wrap justify-center gap-8">
//         {steps.map((step, index) => (
//           <div
//             key={index}
//             className="w-80 p-4 border rounded-lg shadow-lg text-center"
//           >
//             <div className="text-4xl">{step.icon}</div>
//             <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
//             <p className="text-gray-600 mt-2">{step.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;


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
