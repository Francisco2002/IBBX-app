import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
const HomePage = lazy(() => import("../pages/home"));
const AssetsPage = lazy(() => import("../pages/assets"));
const SensorsPage = lazy(() => import("../pages/sensors"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        index: true
    },
    {
        path: "/assets/:id",
        element: <AssetsPage />
    },
    {
        path: "/assets/:assetId/sensors/:id",
        element: <SensorsPage />
    }
]);

export default router;