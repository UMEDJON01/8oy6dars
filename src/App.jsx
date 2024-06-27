import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import PopulationChart from "./components/PopulationChart";
import AreaChart from "./components/AreaChart";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/population",
    element: <PopulationChart />,
  },
  {
    path: "/area",
    element: <AreaChart />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
