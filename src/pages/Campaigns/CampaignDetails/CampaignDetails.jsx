import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CampaignDetails = () => {
    const campaign = useLoaderData();

    return (
      <div className="p-4">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-72 object-cover rounded-md"
        />
        <h1 className="text-2xl font-bold mt-4">{campaign.title}</h1>
        <p className="text-sm text-gray-500 mt-2">{campaign.description}</p>
        <p className="mt-4">Minimum Donation: ${campaign.minDonation}</p>
        <p>Deadline: {new Date(campaign.deadline).toLocaleDateString()}</p>
        <p>Donors: {campaign.donors}</p>
        <p className="mt-2">Hosted by: {campaign.userName}</p>
        <p>Email: {campaign.userEmail}</p>
        <button className='btn'>Donate</button>
      </div>
    );
};

export default CampaignDetails;