import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Blogs from "./Pages/Blogs.jsx";
import Home from "./Pages/Home.jsx";
import RootLayout from "./Layout/RootLayout.jsx";
import PlantDetails from "./Pages/PlantDetails.jsx";
import { StrictMode } from "react";
import axios from "axios";
import LoadingSpinner from "./Components/LoadingSpinner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch(`https://openapi.programming-hero.com/api/plants`),
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Blogs",
        element: <Blogs />,
      },
      {
        path: "/Plant-Details/:id",
        loader: ({ params }) =>
          axios(`https://openapi.programming-hero.com/api/plant/${params.id}`),
        Component: PlantDetails,
      },
    ],
  },
  {
    path: "/Dashboard",
    element: <p>Dekha hobe milestone 12 te</p>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
  </StrictMode>
);
