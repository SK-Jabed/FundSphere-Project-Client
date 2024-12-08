import React from 'react';
import Banner from './Banner/Banner';
import RunningCampaigns from './RunningCampaigns';
import HowItWorks from './HowItWorks';
import JoinCommunity from './JoinCommunity';
import WhyChooseUs from './WhyChooseUs';
import EmpoweringIdeas from './EmpoweringIdeas';

const Home = () => {
    return (
      <div className='dark:bg-black bg-white'>
        <Banner></Banner>
        <RunningCampaigns></RunningCampaigns>
        <HowItWorks></HowItWorks>
        <EmpoweringIdeas></EmpoweringIdeas>
        <WhyChooseUs></WhyChooseUs>
        <JoinCommunity></JoinCommunity>
      </div>
    );
};

export default Home;