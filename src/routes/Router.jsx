import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AllCampaigns from "../pages/Campaigns/AllCampaigns/AllCampaigns";
import MyCampaigns from "../pages/Campaigns/MyCampaigns/MyCampaigns";
import MyDonations from "../pages/Donations/MyDonations";
import AddCampaign from "../pages/Campaigns/AddCampaign/AddCampaign";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import CampaignDetails from "../pages/Campaigns/CampaignDetails/CampaignDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/runningCampaigns"),
      },
      {
        path: "/campaigns",
        element: <AllCampaigns></AllCampaigns>,
        loader: () => fetch("http://localhost:5000/campaigns"),
      },
      {
        path: "/campaigns/:id",
        element: <CampaignDetails></CampaignDetails>,
      },
      {
        path: "/addCampaign",
        element: <AddCampaign></AddCampaign>,
      },
      {
        path: "/myCampaigns",
        element: <MyCampaigns></MyCampaigns>,
      },
      {
        path: "/myDonations",
        element: <MyDonations></MyDonations>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;