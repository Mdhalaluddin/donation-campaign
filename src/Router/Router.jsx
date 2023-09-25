import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../assets/Components/Home/Home";
import Donation from "../assets/Components/Donation/Donation";
import Statistics from "../assets/Components/Statistics/Statistics";
import ErrorPage from "../assets/Components/ErrorPage/ErrorPage";

const myCrateRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            }
        ]
    }
])

export default myCrateRouter;