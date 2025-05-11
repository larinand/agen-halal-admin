

import { BrowserRouter as Router, Routes, Route, Navigate, createBrowserRouter } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLay from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import Media from "./pages/Marketing/Media";
import AuthLayouts from "./pages/AuthPages/AuthPageLayout";
import SignInForm from "./components/auth/SignInForm";
import SignUpForm from "./components/auth/SignUpForm";
import FAQ from "./pages/Marketing/FAQ";
import Insentif from "./pages/Insentif/Insentif";
import { FaCalculator } from "react-icons/fa";
import Calculator from "./pages/Calculator/Calculator";
import PostTest from "./pages/LMS/PostTest";
import Module from "./pages/LMS/Module";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLay/>,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "/dashboard",
        element: <Home />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/FAQ",
        element: <FAQ />,
      },
      {
        path: "/insentif",
        element: <Insentif/>,
      },
      {
        path: "/calculator",
        element: <Calculator />,
      },
      {
        path: "/post-test",
        element: <PostTest />,
      },
      {
        path: "/module",
        element: <Module />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayouts />,
    children: [
      {
        path: '/signin',
        element: <SignInForm/>
      },
      {
        path: '/signup',
        element: <SignUpForm/>
      }
    ]
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
