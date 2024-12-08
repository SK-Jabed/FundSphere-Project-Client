import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyDonations = () => {
  const { user } = useContext(AuthContext); // Logged-in user details
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await fetch(
          `https://b10-assignment-10-server.vercel.app/myDonations?email=${user.email}`
        );
        const data = await response.json();
        setDonations(data);
      } catch (error) {
        console.error("Error fetching donations:", error);
      }
    };

    fetchDonations();
  }, [user.email]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Donations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {donations.map((donation) => (
          <div
            key={donation._id}
            className="border border-gray-300 p-4 rounded-md shadow-md"
          >
            <h2 className="text-lg font-bold">{donation.title}</h2>
            <p className="text-sm">
              Donated At: {new Date(donation.donatedAt).toLocaleString()}
            </p>
            <p className="text-sm">Donor: {donation.userName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyDonations;
