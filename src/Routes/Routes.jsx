import axios from "axios";
import PlantDetails from "../Pages/PlantDetails";
import Home from "../Pages/Home";
import RootLayout from "../Layout/RootLayout";
import { createBrowserRouter } from "react-router";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Blogs from "../Pages/Blogs";
import LoadingSpinner from "../Components/LoadingSpinner";
import Error from "../Pages/Error";
import Cart from "../Pages/Cart";

export const routers = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error />,
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
        path: "/Plant-Details/:id",
        loader: ({ params }) =>
          axios(`https://openapi.programming-hero.com/api/plant/${params.id}`),
        Component: PlantDetails,
      },
      {
        path: "/Cart",
        Component: Cart,
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
    ],
  },
  {
    path: "/Dashboard",
    element: <p>Dekha hobe milestone 12 te</p>,
  },
]);
