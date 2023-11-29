import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MasterPage from "./layouts/MasterPage";
import Coins from "./pages/Coins";
import Exchanges from "./pages/Exchanges"; 

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <MasterPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  {
    path: "/coins",
    element: <MasterPage />,
    children: [{ path: "", element: <Coins /> }],
  },
  {
    path: "/exchanges",
    element: <MasterPage />,
    children: [{ path: "", element: <Exchanges /> }],
  },
]);