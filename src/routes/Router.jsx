import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AllCampaigns from "../pages/Campaigns/AllCampaigns/AllCampaigns";
import MyCampaigns from "../pages/Campaigns/MyCampaigns/MyCampaigns";
import MyDonations from "../pages/Donations/MyDonations";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/campaigns",
            element: <AllCampaigns></AllCampaigns>,
        },
        {
            path: "/myCampaigns",
            element: <MyCampaigns></MyCampaigns>,
        },
        {
            path: "/myDonations",
            element: <MyDonations></MyDonations>
        }
    ]
  },
]);

export default router;