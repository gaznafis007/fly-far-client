import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MultiCity from "../pages/MultiCity";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/multicity',
                element: <MultiCity/>
            }
        ]
    }
    
])