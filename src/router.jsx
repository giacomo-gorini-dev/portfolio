import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";
import RootLayout from "./RootLayout";

import PostOverlayPortal from "./components/PostOverlayPortal";
import SkillOverlayPortal from "./components/SkillOverlayPortal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
        children:[
          {
            path:":postId",
            element: <PostOverlayPortal />,
          }
        ],
      },
      {
        path: "skills",
        element: <SkillsPage />,
         children:[
          {
            path:":skillId",
            element: <SkillOverlayPortal />,
          }
        ]
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
