import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home Page/Hime/Home.jsx";
import Banner from "./Component/Banner/Banner.jsx";
import AboutMe from "./Component/AboutMe/AboutMe.jsx";
import Skill from "./Component/Skill/Skill.jsx";
import Project from "./Component/project/Project.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Banner/>
      },
      {
        path: "/aboutMe",
        element: <AboutMe/>
      },
      {
        path: "/skill",
        element: <Skill/>
      },
      {
        path: "/project",
        element: <Project/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-6xl mx-auto">
      <NextUIProvider>
        <RouterProvider router={route} />
      </NextUIProvider>
    </div>
  </React.StrictMode>
);
