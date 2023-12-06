
import { createBrowserRouter } from "react-router-dom"
import Layout from "../Lay/Layout"
import Homescreen from '../Lay/Homescreen'
import Cart from "../components/Pages/Cart"

export const mainrouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Homescreen />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }

])