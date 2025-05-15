import { Navigate, createBrowserRouter } from "react-router";

import NotFound from "./pages/OtherPage/NotFound";
import AppLay from "./layout/AppLayout";

import AuthLayouts from "./pages/AuthPages/AuthPageLayout";
import SignInForm from "./components/auth/SignInForm";
import SignUpForm from "./components/auth/SignUpForm";

import AdminDashboard from "./pages/Admin/Dashboard/AdminDashboard";
import AdminMedia from "./pages/Admin/Marketing/AdminMedia";
import AdminFAQ from "./pages/Admin/Marketing/AdminFAQ";
import AdminInsentif from "./pages/Admin/Insentif/AdminInsentif";
import AdminCalculator from "./pages/Admin/Calculator/AdminCalculator";
import AdminPostTest from "./pages/Admin/LMS/AdminPostTest";
import AdminLearningModule from "./pages/Admin/LMS/AdminLearningModule";

import AgentDashboard from "./pages/Agent/Dashboard/AgentDashboard";
import AgentStatusPelakuUsaha from "./pages/Agent/PelakuUsaha/AgentStatusPelakuUsaha";
import AgentSubmission from "./pages/Agent/PelakuUsaha/AgentSubmission";
import AgentMedia from "./pages/Agent/Marketing/AgentMedia";
import AgentFAQ from "./pages/Agent/Marketing/AgentFAQ";
import AgentInsentif from "./pages/Agent/Insentif/AgentInsentif";
import AgentCalculator from "./pages/Agent/Calculator/AgentCalculator";
import AgentPostTest from "./pages/Agent/LMS/AgentPostTest";
import AgentLearningModule from "./pages/Agent/LMS/AgentLearningModule";

import SupervisorDashboard from "./pages/Supervisor/Dashboard/SupervisorDashboard";
import SupervisorStatusPelakuUsaha from "./pages/Supervisor/PelakuUsaha/SupervisorStatusPelakuUsaha";
import SupervisorSubmission from "./pages/Supervisor/PelakuUsaha/SupervisorSubmission";
import SupervisorInsentif from "./pages/Supervisor/Insentif/SupervisorInsentif";
import SupervisorCalculator from "./pages/Supervisor/Calculator/SupervisorCalculator";

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
        element: <AdminDashboard />,
      },
      {
        path: "/admin/media",
        element: <AdminMedia />,
      },
      {
        path: "/admin/faq",
        element: <AdminFAQ />,
      },
      {
        path: "/admin/insentif",
        element: <AdminInsentif />,
      },
      {
        path: "/admin/calculator",
        element: <AdminCalculator />,
      },
      {
        path: "/admin/post-test",
        element: <AdminPostTest />,
      },
      {
        path: "/admin/learning-module",
        element: <AdminLearningModule />,
      },
    ],
  },

  {
    path: "/agent",
    element: <AppLay />,
    children: [
      {
        path: "/agent",
        element: <Navigate to="/agent/dashboard" />,
      },
      {
        path: "/agent/dashboard",
        element: <AgentDashboard />,
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
        path: "/agent/media",
        element: <AgentMedia />,
      },
      {
        path: "/agent/faq",
        element: <AgentFAQ />,
      },
      {
        path: "/agent/insentif/",
        element: <AgentInsentif />,
      },
      {
        path: "/agent/calculator",
        element: <AgentCalculator />,
      },
      {
        path: "/agent/post-test",
        element: <AgentPostTest />,
      },
      {
        path: "/agent/learning-module",
        element: <AgentLearningModule />,
      },
    ],
  },

  {
    path: "/supervisor",
    element: <AppLay />,
    children: [
      {
        path: "/supervisor",
        element: <Navigate to="/supervisor/dashboard" />,
      },
      {
        path: "/supervisor/dashboard",
        element: <SupervisorDashboard />,
      },
      {
        path: "/supervisor/pelaku-usaha/status",
        element: <SupervisorStatusPelakuUsaha />,
      },
      {
        path: "/supervisor/pelaku-usaha/submission",
        element: <SupervisorSubmission />,
      },
      {
        path: "/supervisor/insentif/",
        element: <SupervisorInsentif />,
      },
      {
        path: "/supervisor/calculator",
        element: <SupervisorCalculator />,
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
