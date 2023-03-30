import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import About from "./pages/About";
import MainLayout from "./layouts/mainLayout";
import Activities from "./pages/activities";
import Activity from "./pages/activities/id";
import Churches from "./pages/churches";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

//-- ROUTER-- //

//Home & About = Singole
//Activiy & Churches = Dinamiche

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="activities" element={<Activities />} />
      <Route path="activities/:id" element={<Activity />} />
      <Route path="churches/:id" element={<Churches />} />
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
