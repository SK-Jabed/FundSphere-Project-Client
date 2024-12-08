// import React, { useState } from 'react';
// import { Link, useLoaderData } from 'react-router-dom';

// const AllCampaigns = () => {
//     const allCampaigns = useLoaderData();

//     const [sortOrder, setSortOrder] = useState("asc"); 

//     const handleSort = async () => {
//       const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
//       setSortOrder(newSortOrder);

//       try {
//         const response = await fetch(
//           `http://localhost:5000/campaigns?sort=${newSortOrder}`
//         );
//         const data = await response.json();
//         setCampaigns(data);
//       } catch (error) {
//         console.error("Error fetching sorted campaigns:", error);
//       }
//     };


//     return (
//       <div>
//         All Campaigns are Here: {allCampaigns.length}
//         <button onClick={handleSort} className="btn btn-primary">
//           Sort by Minimum Donation (
//           {sortOrder === "asc" ? "Ascending" : "Descending"})
//         </button>
//         <div className="overflow-x-auto w-11/12 mx-auto">
//           <table className="table table-zebra">
//             {/* head */}
//             <thead>
//               <tr>
//                 <th></th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Created At</th>
//                 <th>Last Sign In At</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* row 1 */}
//               {allCampaigns.map((campaign) => (
//                 <tr key={campaign._id}>
//                   <th>1</th>
//                   <td>{campaign.title}</td>
//                   <td>{campaign.type}</td>
//                   <td>{campaign.minDonation}</td>
//                   <td>{campaign.deadline}</td>
//                   <td>
//                     <Link to={`/campaign/${campaign._id}`} className="btn">
//                       See More
//                     </Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
// };

// export default AllCampaigns;







import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllCampaigns = () => {
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort order
  const [campaigns, setCampaigns] = useState(useLoaderData()); // Initial data from loader

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
    <div>
      <div className="flex justify-between items-center w-11/12 mx-auto mb-4">
        <h1 className="text-2xl font-bold text-blue-500 dark:text-white">
          All Campaigns: {campaigns.length}
        </h1>
        <button onClick={handleSort} className="btn btn-primary">
          Sort by Minimum Donation (
          {sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>
      </div>
      <div className="overflow-x-auto w-11/12 mx-auto">
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
      </div>
    </div>
  );
};

export default AllCampaigns;
