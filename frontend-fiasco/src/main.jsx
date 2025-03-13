import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/index.css";
import routes from './routes/routes.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import { ShopProvider } from './context/ShopContext.jsx';

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopProvider>
        <RouterProvider router={router}/>
      </ShopProvider>
  </StrictMode>,
)
