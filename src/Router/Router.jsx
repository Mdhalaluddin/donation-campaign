import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../assets/Components/Home/Home";
import Donation from "../assets/Components/Donation/Donation";
import Statistics from "../assets/Components/Statistics/Statistics";
import ErrorPage from "../assets/Components/ErrorPage/ErrorPage";
import DonateCard from "../assets/Components/DonateCard/DonateCard";

const myCrateRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('../../public/donate.json'),
            },
            {
                path: '/donation',
                element: <Donation></Donation>,
                loader: ()=> fetch('../../public/donate.json')
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader: ()=> fetch('../../public/donate.json')
            },
            {
                path: '/cards/:id',
                element: <DonateCard></DonateCard>,
                loader: ()=> fetch('../../public/donate.json')
            }
        ]
    }
])

export default myCrateRouter;