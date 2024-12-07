import React from "react";

const categories = [
  { title: "Technology", image: "https://i.ibb.co.com/jJX4dTz/donate-items.jpg" },
  { title: "Health", image: "https://i.ibb.co.com/jJX4dTz/donate-items.jpg" },
  { title: "Education", image: "https://i.ibb.co.com/jJX4dTz/donate-items.jpg" },
  { title: "Arts", image: "https://i.ibb.co.com/jJX4dTz/donate-items.jpg" },
  { title: "Environment", image: "https://i.ibb.co.com/jJX4dTz/donate-items.jpg" },
  { title: "Community", image: "https://i.ibb.co.com/jJX4dTz/donate-items.jpg" },
];

const CampaignCategories = () => {
  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">
        Explore Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden shadow-lg group hover:scale-105 transform transition"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-40 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignCategories;