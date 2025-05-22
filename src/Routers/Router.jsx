import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import NewsPage from "../Pages/NewsPage/NewsPage";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Profile from "../Pages/Profile/Profile";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children:[
      {
        path:"/",
        element: <NewsPage/>
      },
      {
        path:"/dashboard",
        element:<Dashboard/>,
        children:[
          {
            path:"/dashboard",
            element:<Profile/>
          }
        ]

      }
    ]
  },
]);