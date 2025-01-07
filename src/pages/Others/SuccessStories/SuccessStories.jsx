// import React from "react";

// const SuccessStories = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-100 px-6 py-10">
//       <h1 className="text-4xl font-bold mb-6 text-center">Success Stories</h1>
//       <p className="text-lg leading-7 text-gray-300 max-w-4xl mx-auto text-center">
//         Discover how FundSphere has helped countless individuals and
//         organizations turn their ideas into reality.
//       </p>
//       <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold text-teal-400 mb-4">Project A</h2>
//           <p className="text-gray-300">
//             Raised $50,000 to build innovative tech solutions for small
//             businesses.
//           </p>
//         </div>
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold text-teal-400 mb-4">Project B</h2>
//           <p className="text-gray-300">
//             Successfully funded a creative arts project that reached global
//             audiences.
//           </p>
//         </div>
//         <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold text-teal-400 mb-4">Project C</h2>
//           <p className="text-gray-300">
//             Raised funds for a community-driven environmental initiative.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SuccessStories;



import React from "react";

const SuccessStories = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-8 text-center">
          Success Stories
        </h1>
        <p className="text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 text-center">
          At FundSphere, we are proud to showcase the success of our users.
          These stories highlight the incredible impact of crowdfunding on
          creative projects, startups, and meaningful causes.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-teal-500 mb-4">
              Project Alpha
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Successfully raised $100,000 for a sustainable tech startup that
              is revolutionizing energy solutions.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-teal-500 mb-4">
              Art for All
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Helped a local artist raise $50,000 to launch a community art
              initiative.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-teal-500 mb-4">
              Green Future
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              A non-profit organization raised $25,000 for reforestation efforts
              in urban areas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
