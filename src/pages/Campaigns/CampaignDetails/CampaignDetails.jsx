import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";

const CampaignDetails = () => {
  // const campaign = useLoaderData();
  const campaign = useLoaderData();
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
    <div className="p-4 py-16 flex items-center gap-6">
      <div className="w-1/2">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-full h-[360px] object-cover rounded-md"
        />
      </div>
      <div className="w-1/2 px-4 py-8 border-2 rounded-md h-full bg-gray-100 dark:bg-gray-800">
        <h1 className="text-3xl font-bold mt-2 dark:text-white">
          {campaign.title}
        </h1>
        <p className="text-sm text-gray-500 font-semibold mt-2 dark:text-gray-400">
          {campaign.description}
        </p>
        <p className="mt-4 text-gray-600 font-medium dark:text-gray-200">
          Minimum Donation: ${campaign.minDonation}
        </p>
        <p className="mt-[2px] text-gray-600 font-medium dark:text-gray-200">
          Deadline: {new Date(campaign.deadline).toLocaleDateString()}
        </p>
        <p className="mt-[2px] text-gray-600 font-medium dark:text-gray-200">
          Donors: {campaign.donors}
        </p>
        <p className="mt-4 text-gray-600 font-medium dark:text-gray-200">
          Hosted by: {campaign.userName}
        </p>
        <p className="mt-[2px] text-gray-600 font-medium dark:text-gray-200">
          Email: {campaign.userEmail}
        </p>
        <button
          onClick={handleDonate}
          className="btn mt-4 px-6 py-2 text-lg font-semibold text-white capitalize transition-transform transform bg-gradient-to-r from-indigo-500 via-blue-500 to-blue-600 rounded-md shadow-lg lg:w-auto hover:scale-105 focus:outline-none"
        >
          Donate
        </button>
      </div>
    </div>
  );
};

export default CampaignDetails;
