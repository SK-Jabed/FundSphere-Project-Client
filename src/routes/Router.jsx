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
        path: "/campaign/:id",
        element: (
          <PrivateRoute>
            <CampaignDetails></CampaignDetails>
          </PrivateRoute>
        ),
        // loader: async ({ params }) => {
        //   const response = await fetch(
        //     `http://localhost:5000/campaign/${params.id}`
        //   );
        //   return response.json();
        // },
        loader: ({ params }) =>
          fetch(`http://localhost:5000/campaign/${params.id}`),
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
          fetch(`http://localhost:5000/campaigns/${params.id}`),
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