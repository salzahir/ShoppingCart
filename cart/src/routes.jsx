import App from "./App"
import ErrorPage from "./ErrorPage"
import Products from "./Products"

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
]

export default routes