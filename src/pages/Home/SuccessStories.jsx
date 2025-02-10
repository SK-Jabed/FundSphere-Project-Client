import React from "react";
import { Fade } from "react-awesome-reveal";

const successStories = [
  {
    title: "Education for All",
    description:
      "Raised $50,000 to provide education for underprivileged children in rural areas.",
    image: "https://i.ibb.co.com/jJX4dTz/donate-items.jpg",
    raisedAmount: "$50,000",
  },
  {
    title: "Clean Water Initiative",
    description:
      "Successfully funded a project to build 10 wells in drought-affected regions.",
    image: "https://i.ibb.co.com/jJX4dTz/donate-items.jpg",
    raisedAmount: "$25,000",
  },
  {
    title: "Health for Women",
    description:
      "Raised funds to provide free healthcare for women in underdeveloped communities.",
    image: "https://i.ibb.co.com/jJX4dTz/donate-items.jpg",
    raisedAmount: "$40,000",
  },
];

const SuccessStories = () => {
  return (
    <div className="py-10 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
      <h2 className="text-4xl font-bold text-center mb-8">Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
        {successStories.map((story, index) => (
          <div
            key={index}
            className="p-6 bg-white text-black rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-bold mt-4">{story.title}</h3>
            <p className="text-gray-700 mt-2">{story.description}</p>
            <p className="font-semibold text-indigo-600 mt-4">
              Total Raised: {story.raisedAmount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessStories;

// import React from "react";
// import { Fade } from "react-awesome-reveal";

// const stories = [
//   {
//     title: "Bringing Clean Water to Communities",
//     description: "Over $50,000 raised to build wells in rural areas.",
//     image: "https://i.ibb.co.com/jJX4dTz/donate-items.jpg",
//   },
//   {
//     title: "Empowering Women Entrepreneurs",
//     description: "Funded over 200 small businesses globally.",
//     image: "https://i.ibb.co.com/jJX4dTz/donate-items.jpg",
//   },
//   {
//     title: "Innovating Education for All",
//     description: "Technology-enabled learning for 10,000+ students.",
//     image: "https://i.ibb.co.com/jJX4dTz/donate-items.jpg",
//   },
// ];

// const SuccessStories = () => {
//   return (
//     <div className="py-10 bg-gray-100">
//       <h2 className="text-4xl font-bold text-center mb-8">Success Stories</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
// {stories.map((story, index) => (
//   <Fade key={index} duration={800} cascade>
//     <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
//       <img
//         src={story.image}
//         alt={story.title}
//         className="w-full h-48 object-cover rounded-t-lg"
//       />
//       <h3 className="text-xl font-bold mt-4">{story.title}</h3>
//       <p className="text-gray-700 mt-2">{story.description}</p>
//     </div>
//   </Fade>
// ))}
//       </div>
//     </div>
//   );
// };

// export default SuccessStories;
