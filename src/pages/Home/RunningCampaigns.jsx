import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const RunningCampaigns = () => {
  const runningCampaigns = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">Running Campaigns</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
        {runningCampaigns.map((campaign, index) => (
          <div
            key={campaign._id}
            className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <img
              src={campaign.image}
              alt={campaign.title}
              className="w-full h-48 object-cover rounded-t-lg"
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
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => navigate(`/campaign/${campaign._id}`)}
              >
                See More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RunningCampaigns;
