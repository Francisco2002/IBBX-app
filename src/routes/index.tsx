import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import AssetsPage from "../pages/assets";
import SensorsPage from "../pages/sensors";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        index: true
    },
    {
        path: "/assets",
        element: <AssetsPage />
    },
    {
        path: "/sensors",
        element: <SensorsPage />
    }
]);

export default router;