import App from "./App"
import ErrorPage from "./ErrorPage"
import Products from "./Products"
import Profile from "./Profile"
import Cart from "./Cart"
import HomePage from "./Homepage"
import Layout from "./Layout"

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