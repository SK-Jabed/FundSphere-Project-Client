import React, { useContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const MyCampaigns = () => {
  const { user } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/myCampaigns?email=${user.email}`
        );
        const data = await response.json();
        setCampaigns(data);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchCampaigns();
  }, [user.email]);

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure you want to delete this campaign?")) {
//       try {
//         const response = await fetch(`http://localhost:5000/campaigns/${id}`, {
//           method: "DELETE",
//         });
//         if (response.ok) {
//           toast.success("Campaign deleted successfully!");
//           setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
//         }
//       } catch (error) {
//         toast.error("Failed to delete campaign");
//         console.error(error);
//       }
//     }
//   };

   const handleDelete = (_id) => {
     Swal.fire({
       title: "Are you sure?",
       text: "You won't be able to revert this!",
       icon: "warning",
       showCancelButton: true,
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       confirmButtonText: "Yes, delete it!",
     }).then((result) => {
       if (result.isConfirmed) {
         fetch(`http://localhost:5000/campaigns/${_id}`, {
           method: "DELETE",
         })
           .then((res) => res.json())
           .then((data) => {
             if (data.deletedCount > 0) {
               Swal.fire({
                 title: "Deleted!",
                 text: "Your Coffee has been deleted.",
                 icon: "success",
               });
               const remaining = campaigns.filter((campaign) => campaign._id !== _id);
               setCampaigns(remaining);
             }
           });
       }
     });
   };

  const handleUpdate = (id) => {
    // Navigate to an Update form with the campaign ID
    window.location.href = `/updateCampaign/${id}`;
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Campaigns</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Title</th>
            <th className="border border-gray-300 p-2">Deadline</th>
            <th className="border border-gray-300 p-2">Minimum Donation</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign._id}>
              <td className="border border-gray-300 p-2">{campaign.title}</td>
              <td className="border border-gray-300 p-2">
                {new Date(campaign.deadline).toLocaleDateString()}
              </td>
              <td className="border border-gray-300 p-2">
                ${campaign.minDonation}
              </td>
              <td className="border border-gray-300 p-2 flex gap-2">
                <button
                  onClick={() => handleUpdate(campaign._id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(campaign._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCampaigns;
