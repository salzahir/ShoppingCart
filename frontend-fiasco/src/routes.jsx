import App from "./App"
import ErrorPage from "./ErrorPage"
import Products from "./Products"
import Profile from "./Profile"
import Cart from "./Cart"
import HomePage from "./Homepage"

const routes = [

    {
        path: "/",
        element: <App />,
        exact: true,
        errorElement: <ErrorPage />,
    }, 

    {
        path: "/products",
        element: <Products />,
        exact: true,
        errorElement: <ErrorPage />,
    },

    {
        path: "/profile",
        element: <Profile />,
        exact: true,
        errorElement: <ErrorPage />,
    },

    {
        path: "/cart",
        element: <Cart />,
        errorElement: <ErrorPage/>
    }
]

export default routes