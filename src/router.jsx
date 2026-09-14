import HomePage from "./pages/HomePage";
import RootLayout from "./RootLayout";
import BlogPage from "./pages/BlogPage";
import SkillPage from "./pages/SkillPage";
import ContactPage from "./pages/ContactPage";
import CardBlog from "./components/CardBlog";
import CardSkil from "./components/CardSkill";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/blog",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/blog/:cardBlog-id",
        element: <CardBlog></CardBlog>,
      },
      {
        path: "/skills",
        element: <SkillPage></SkillPage>,
      },

      {
        path: "/skills/:cardSkil-id",
        element: <CardSkil></CardSkil>,
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>,
      },
    ],
  },
]);
