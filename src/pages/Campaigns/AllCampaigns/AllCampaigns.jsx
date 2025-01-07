import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
// import { Fade } from "react-awesome-reveal";

const AllCampaigns = () => {
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort order
  const [campaigns, setCampaigns] = useState(useLoaderData()); // Initial data from loader
  const navigate = useNavigate();

  const handleSort = () => {
    // Toggle sort order
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);

    // Sort campaigns based on minDonation
    const sortedCampaigns = [...campaigns].sort((a, b) => {
      return newSortOrder === "asc"
        ? a.minDonation - b.minDonation
        : b.minDonation - a.minDonation;
    });

    setCampaigns(sortedCampaigns);
  };

  return (
    <div className="dark:bg-gray-900 py-16">
      <div className="flex flex-col md:flex-row justify-between items-center w-11/12 mx-auto mb-4 gap-2">
        <h1 className="text-2xl font-bold text-black dark:text-white">
          All Campaigns: {campaigns.length}
        </h1>
        <button
          onClick={handleSort}
          className="px-5 py-4 text-sm font-medium text-white capitalize transition-transform transform bg-gradient-to-r from-indigo-500 via-blue-500 to-blue-600 rounded-md shadow-lg lg:w-auto hover:scale-105 focus:outline-none"
        >
          Sort by Minimum Donation (
          {sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>
      </div>
      {/* <div className="overflow-x-auto w-11/12 mx-auto mb-12">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Type</th>
              <th>Minimum Donation</th>
              <th>Deadline</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign, index) => (
              <tr key={campaign._id}>
                <th>{index + 1}</th>
                <td>{campaign.title}</td>
                <td>{campaign.type}</td>
                <td>${campaign.minDonation}</td>
                <td>{new Date(campaign.deadline).toLocaleDateString()}</td>
                <td>
                  <Link to={`/campaign/${campaign._id}`} className="btn">
                    See More
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
        {campaigns.map((campaign) => (
          // <Fade key={campaign._id} direction="up" duration={800}>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 h-[480px]">
            <img
              src={campaign.image}
              alt={campaign.title}
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-bold mt-4">{campaign.title}</h3>
            <p className="text-gray-700 mt-2">{campaign.description}</p>
            <div className="mt-4">
              <p className="text-sm mt-2">
                Deadline: {new Date(campaign.deadline).toLocaleDateString()}
              </p>
              <p className="text-sm">
                Minimum Donation: ${campaign.minDonation}
              </p>
              <button
                onClick={() => navigate(`/campaign/${campaign._id}`)}
                className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold shadow-lg hover:shadow-xl hover:bg-gradient-to-l hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 transition duration-300 ease-in-out mt-2"
              >
                See More
              </button>
            </div>
          </div>
          // </Fade>
        ))}
      </div>
    </div>
  );
};

export default AllCampaigns;
