import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router";
import App from "./App.jsx";
import ProjectDetail from "../pages/projects/page.js";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/projects/:slug",
        loader: async ({params})    => {
            let slug = params.slug;
            return {
                slug: slug,
            }
        },
        element: <ProjectDetail  />,
    }
]);


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
