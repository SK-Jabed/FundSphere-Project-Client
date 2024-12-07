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
            This is Home
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