import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import NotFound from "./pages/NotFound/index.jsx";
import Home from "./pages/Home";
import ReserveComplete from "./pages/ReserveComplete";
import ReserveCheck from "./pages/ReserveCheck";
import GlobalStyle from "./styles/global.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "reservas/:reserva",
        element: <ReserveCheck />,
      },
      {
        path: "reservas/finish",
        element: <ReserveComplete />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
