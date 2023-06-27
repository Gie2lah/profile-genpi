import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./assets/pages/homePage";
import ErrorElement from "./assets/pages/errorElement";
import DestinasiPage from "./assets/pages/destinationPage";
import AnggotaPage from "./assets/pages/anggotaPage";
import { ThemeProvider } from "@material-tailwind/react";
import PantaiKoneng from "./assets/pages/Destinasi/pantai-koneng";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/destinasi",
    element: <DestinasiPage />,
  },
  {
    path: "/anggota",
    element: <AnggotaPage />,
  },
  {
    path: "/destinasi/pantai-koneng",
    element: <PantaiKoneng />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
