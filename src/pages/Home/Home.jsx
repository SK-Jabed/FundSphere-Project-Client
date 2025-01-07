import React from "react";
import Banner from "./Banner/Banner";
import EmpoweringIdeas from "./EmpoweringIdeas";
import HowItWorks from "./HowItWorks";
import JoinCommunity from "./JoinCommunity";
import RunningCampaigns from "./RunningCampaigns";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div className="dark:bg-gray-900 bg-white">
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <RunningCampaigns></RunningCampaigns>
      <EmpoweringIdeas></EmpoweringIdeas>
      <WhyChooseUs></WhyChooseUs>
      <JoinCommunity></JoinCommunity>
    </div>
  );
};

export default Home;
