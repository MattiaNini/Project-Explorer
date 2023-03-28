import "./index.css";
import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About";
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
//Activiy & City = Dinamiche

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="activity/:id" element={<h1>Attività</h1>} />
      <Route path="city/:id" element={<h1>Città</h1>} />
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
