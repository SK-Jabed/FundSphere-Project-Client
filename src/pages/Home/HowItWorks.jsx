import React from "react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const steps = [
    {
      title: "Start a Campaign",
      description: "Share your cause or project and set a fundraising goal.",
      icon: "📤", // Use emojis or replace with SVGs/icons
    },
    {
      title: "Spread the Word",
      description: "Promote your campaign on social media to reach supporters.",
      icon: "📢",
    },
    {
      title: "Receive Contributions",
      description: "Collect funds securely from donors around the world.",
      icon: "💰",
    },
  ];

  return (
    <section
      className="text-center my-6 md:my-8 lg:my-12 w-11/12 mx-auto"
      data-aos="fade-up"
    >
      <motion.h2
        className="text-4xl font-extrabold bg-gradient-to-r from-cyan-500 via-teal-600 to-purple-600 bg-clip-text text-transparent"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        How It Works
      </motion.h2>
      <p
        className="text-base font-medium text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6 mt-2"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Reuniting people with their lost belongings has never been easier. Our
        streamlined process connects you with the right resources to find or
        report items efficiently.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              {step.title}
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;

// import React from "react";
// import { Fade } from "react-awesome-reveal";

// const HowItWorks = () => {
//   const steps = [
//     {
//       step: "1. Start a Campaign",
//       description: "Share your cause or project and set a fundraising goal.",
//       icon: "📤",
//     },
//     {
//       step: "2. Spread the Word",
//       description: "Promote your campaign on social media to reach supporters.",
//       icon: "📢",
//     },
//     {
//       step: "3. Receive Contributions",
//       description: "Collect funds securely from donors around the world.",
//       icon: "💰",
//     },
//   ];

//   return (
//     <div className="py-10 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
//       <h2 className="text-4xl font-bold text-center mb-8">How It Works</h2>
//       <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-11/12 mx-auto">
//         {steps.map((item, index) => (
//           <Fade key={index} direction="up" duration={500} delay={index * 200}>
//             <div className="bg-white text-black p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 text-center">
//               <div className="text-6xl">{item.icon}</div>
//               <h3 className="text-xl font-bold mt-4">{item.step}</h3>
//               <p className="mt-2">{item.description}</p>
//             </div>
//           </Fade>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;
