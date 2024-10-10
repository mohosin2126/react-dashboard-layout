import {createBrowserRouter} from "react-router-dom";
import Layout from "../component/layout/index.jsx";
import Dashboard from "../view/dashboard/index.jsx";
import Elements from "../view/ui-elements/index.jsx";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                path:"/dashboard",
                element: <Dashboard/>,
            },
            {
                path:"/ui-elements",
                element:<Elements/>,
            }
        ]
    },
]);