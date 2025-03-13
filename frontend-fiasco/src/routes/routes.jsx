import App from "../App"
import ErrorPage from "../pages/ErrorPage"
import Products from "../pages/Products"
import Profile from "../pages/Profile"
import Cart from "../pages/Cart"
import HomePage from "../pages/Homepage"
import Layout from "../layout/Layout"

const routes = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "products",
                element: <Products />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "cart",
                element: <Cart />
            }
        ]
    }
];

export default routes