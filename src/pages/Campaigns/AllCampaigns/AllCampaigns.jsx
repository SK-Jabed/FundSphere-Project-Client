import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllCampaigns = () => {
    const allCampaigns = useLoaderData();

    return (
      <div>
        All Campaigns are Here: {allCampaigns.length}
        <div className="overflow-x-auto w-11/12 mx-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Created At</th>
                <th>Last Sign In At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allCampaigns.map((campaign) => (
                <tr key={campaign._id}>
                  <th>1</th>
                  <td>{campaign.title}</td>
                  <td>{campaign.type}</td>
                  <td>{campaign.minDonation}</td>
                  <td>{campaign.deadline}</td>
                  <td>
                    <Link to={`/campaign/${campaign._id}`} className="btn">See More</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllCampaigns;