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
import PrivateRoute from "./PrivateRoute";
import UpdateCampaign from "../pages/Campaigns/UpdateCampaign/UpdateCampaign";
import NotFound from "../pages/NotFound/NotFound";
import AboutUs from "../pages/Others/AboutUs/AboutUs";
import ContactUs from "../pages/Others/ContactUs/ContactUs";
import SuccessStories from "../pages/Others/SuccessStories/SuccessStories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://b10-assignment-10-server.vercel.app/runningCampaigns"),
      },
      {
        path: "/campaigns",
        element: <AllCampaigns></AllCampaigns>,
        loader: () =>
          fetch("https://b10-assignment-10-server.vercel.app/campaigns"),
      },
      {
        path: "/campaign/:id",
        element: (
          <PrivateRoute>
            <CampaignDetails></CampaignDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b10-assignment-10-server.vercel.app/campaign/${params.id}`
          ),
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/successStories",
        element: <SuccessStories></SuccessStories>,
      },
      {
        path: "/addCampaign",
        element: (
          <PrivateRoute>
            <AddCampaign></AddCampaign>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCampaigns",
        element: (
          <PrivateRoute>
            <MyCampaigns></MyCampaigns>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateCampaign/:id",
        element: (
          <PrivateRoute>
            <UpdateCampaign></UpdateCampaign>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b10-assignment-10-server.vercel.app/campaigns/${params.id}`
          ),
      },
      {
        path: "/myDonations",
        element: (
          <PrivateRoute>
            <MyDonations></MyDonations>
          </PrivateRoute>
        ),
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
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
