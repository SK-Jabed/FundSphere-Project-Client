import React from 'react';
import Banner from './Banner/Banner';
import RunningCampaigns from './RunningCampaigns';
import HowItWorks from './HowItWorks';
import CampaignCategories from './CampaignCategories';
import JoinCommunity from './JoinCommunity';
import SuccessStories from './SuccessStories';
import Testimonials from './Testimonials';
import WhyChooseUs from './WhyChooseUs';
import EmpoweringIdeas from './EmpoweringIdeas';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <div className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100 min-h-screen p-8">
          <h1 className="text-4xl font-bold">Dark Mode Example</h1>
          <p className="mt-4">This text changes based on the selected theme.</p>
        </div>
        <RunningCampaigns></RunningCampaigns>
        <HowItWorks></HowItWorks>
        <CampaignCategories></CampaignCategories>
        <SuccessStories></SuccessStories>
        <WhyChooseUs></WhyChooseUs>
        <EmpoweringIdeas></EmpoweringIdeas>
        <Testimonials></Testimonials>
        <JoinCommunity></JoinCommunity>
      </div>
    );
};

export default Home;