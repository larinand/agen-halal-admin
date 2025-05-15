import { Navigate, createBrowserRouter } from "react-router";

import NotFound from "./pages/OtherPage/NotFound";
import AppLay from "./layout/AppLayout";

import AuthLayouts from "./pages/AuthPages/AuthPageLayout";
import SignInForm from "./components/auth/SignInForm";
import SignUpForm from "./components/auth/SignUpForm";

import Home from "./pages/Dashboard/Home";
import AgentStatusPelakuUsaha from "./pages/Agent/PelakuUsaha/AgentStatusPelakuUsaha";
import AgentSubmission from "./pages/Agent/PelakuUsaha/AgentSubmission";
import Media from "./pages/Marketing/Media";
import AgentMedia from "./pages/Agent/Marketing/AgentMedia";
import FAQ from "./pages/Marketing/FAQ";
import AgentFAQ from "./pages/Agent/Marketing/AgentFAQ";
import Insentif from "./pages/Insentif/Insentif";
import AgentInsentif from "./pages/Agent/Insentif/AgentInsentif";
import Calculator from "./pages/Calculator/Calculator";
import AgentCalculator from "./pages/Agent/Calculator/AgentCalculator";
import PostTest from "./pages/LMS/PostTest";
import AgentPostTest from "./pages/Agent/LMS/AgentPostTest";
import Module from "./pages/LMS/Module";
import AgentLearningModule from "./pages/Agent/LMS/AgentLearningModule";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLay />,
    children: [
      {
        path: "/",
        element: <Navigate to="/admin/dashboard" />,
      },
      {
        path: "/admin/dashboard",
        element: <Home />,
      },
      {
        path: "/agent/pelaku-usaha/status",
        element: <AgentStatusPelakuUsaha />,
      },
      {
        path: "/agent/pelaku-usaha/submission",
        element: <AgentSubmission />,
      },
      {
        path: "/admin/media",
        element: <Media />,
      },
      {
        path: "/agent/media",
        element: <AgentMedia />,
      },
      {
        path: "/admin/faq",
        element: <FAQ />,
      },
      {
        path: "/agent/faq",
        element: <AgentFAQ />,
      },
      {
        path: "/admin/insentif",
        element: <Insentif />,
      },
      {
        path: "/agent/insentif/",
        element: <AgentInsentif />,
      },
      {
        path: "/admin/calculator",
        element: <Calculator />,
      },
      {
        path: "/agent/calculator",
        element: <AgentCalculator />,
      },
      {
        path: "/admin/post-test",
        element: <PostTest />,
      },
      {
        path: "/agent/post-test",
        element: <AgentPostTest />,
      },
      {
        path: "/admin/learning-module",
        element: <Module />,
      },
      {
        path: "/agent/learning-module",
        element: <AgentLearningModule />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayouts />,
    children: [
      {
        path: "/signin",
        element: <SignInForm />,
      },
      {
        path: "/signup",
        element: <SignUpForm />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
