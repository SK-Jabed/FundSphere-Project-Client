import React from 'react';
import Banner from './Banner/Banner';
import RunningCampaigns from './RunningCampaigns';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            This is Home
            <RunningCampaigns></RunningCampaigns>
        </div>
    );
};

export default Home;