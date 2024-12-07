
import React from "react";

const JoinCommunity = () => {
  return (
    <div className="py-10 bg-gradient-to-r from-teal-400 to-cyan-600 text-white text-center">
      <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
      <p className="text-lg mb-6">
        Become a part of a community that believes in making a difference.
        Whether you're a creator or contributor, Crowdcube welcomes you!
      </p>
      <div className="flex justify-center gap-6">
        <button className="px-6 py-3 bg-white text-teal-600 font-bold rounded-full hover:bg-gray-200 transition-all">
          Get Started
        </button>
        <button className="px-6 py-3 bg-white text-teal-600 font-bold rounded-full hover:bg-gray-200 transition-all">
          Start a Campaign
        </button>
      </div>
    </div>
  );
};

export default JoinCommunity;
