import { Navigate, createBrowserRouter } from "react-router";
import NotFound from "./pages/OtherPage/NotFound";
import AppLay from "./layout/AppLayout";
import Home from "./pages/Dashboard/Home";
import Media from "./pages/Marketing/Media";
import AuthLayouts from "./pages/AuthPages/AuthPageLayout";
import SignInForm from "./components/auth/SignInForm";
import SignUpForm from "./components/auth/SignUpForm";
import FAQ from "./pages/Marketing/FAQ";
import Insentif from "./pages/Insentif/Insentif";
import Calculator from "./pages/Calculator/Calculator";
import PostTest from "./pages/LMS/PostTest";
import Module from "./pages/LMS/Module";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLay />,
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
        element: <Insentif />,
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
