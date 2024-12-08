import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const CampaignDetails = () => {
  // const campaign = useLoaderData();
  const campaign = useLoaderData();
  // console.log(campaign);
  const { user } = useContext(AuthContext);

  const handleDonate = async () => {
    const currentDate = new Date();
    const campaignDeadline = new Date(campaign.deadline);

    // Check if the deadline is over
    if (currentDate > campaignDeadline) {
      // toast.error("This campaign's deadline has passed. You cannot donate.");
      // return;
      Swal.fire({
        icon: "error",
        title: "Oops, Something went wrong!",
        text: "This campaign's deadline has passed. You cannot donate.",
      });
      return;
    }

    const donationData = {
      campaignId: campaign._id,
      title: campaign.title,
      userEmail: user.email,
      userName: user.displayName,
      donatedAt: new Date().toISOString(),
    };

    try {
      const response = await fetch(
        "https://b10-assignment-10-server.vercel.app/donations",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(donationData),
        }
      );

      if (response.ok) {
        // toast.success("Thank you for your donation!");
        Swal.fire({
          title: "Success!",
          text: "Thank you for your donation!",
          icon: "success",
          confirmButtonText: "Okay",
        });
      } else {
        // toast.error("Failed to donate. Please try again.");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: " Failed to donate. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error donating:", error);
      // toast.error("Failed to donate. Please try again.");
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: " Failed to donate. Please try again.",
      });
    }
  };

  return (
    <div className="p-4 my-16">
      <img
        src={campaign.image}
        alt={campaign.title}
        className="w-full h-[450px] object-cover rounded-md"
      />
      <h1 className="text-2xl font-bold mt-4">{campaign.title}</h1>
      <p className="text-sm text-gray-500 mt-2">{campaign.description}</p>
      <p className="mt-4">Minimum Donation: ${campaign.minDonation}</p>
      <p>Deadline: {new Date(campaign.deadline).toLocaleDateString()}</p>
      <p>Donors: {campaign.donors}</p>
      <p className="mt-2">Hosted by: {campaign.userName}</p>
      <p>Email: {campaign.userEmail}</p>
      <button onClick={handleDonate} className="btn">
        Donate
      </button>
    </div>
  );
};

export default CampaignDetails;
