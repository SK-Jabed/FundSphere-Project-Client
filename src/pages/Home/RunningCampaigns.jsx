import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const RunningCampaigns = () => {
    const runningCampaigns = useLoaderData();
    const navigate = useNavigate();

    return (
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {runningCampaigns.map((campaign) => (
          <div
            key={campaign._id}
            className="card bg-white shadow-lg p-4 rounded-md"
          >
            <img
              src={campaign.image}
              alt={campaign.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4">
              <h2 className="text-lg font-bold">{campaign.title}</h2>
              <p className="text-sm text-gray-500">{campaign.description}</p>
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
    );
};

export default RunningCampaigns;