import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const RunningCampaigns = () => {
  const runningCampaigns = useLoaderData();
  const navigate = useNavigate();

  return (
    <div className="py-10 bg-gray-100 dark:bg-black">
      <h2 className="text-4xl dark:text-white font-bold text-center mb-8">
        Running Campaigns
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
        {runningCampaigns.map((campaign) => (
          <Fade key={campaign._id} direction="up" duration={800}>
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
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default RunningCampaigns;
